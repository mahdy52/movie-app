import {useState} from 'react';
import axios from "axios";
import React,{ useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';









function Mahdi () {
  {
    const [input1, setInput1]=useState(
        {
              title:"",
              year:"",
              description:""
         }
         );


              const handleChange = e => { 
              const {name, value}=e.target
              // e.target.name=e.target.value 
              setInput1({
            ...input1,
            [name]:value
        });
        };
/**********Get******************** */
const [movie,setMovie] = useState([])
            const getMovie = ()=>{
            axios.get('http://localhost:3007/posts').then((response) =>    
            setMovie(response.data) 
           ) 
    }
  
            useEffect( ()=>
            getMovie(),[]
     )
      
/*****************Post****************** */

             const handlesubmit=(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:3007/posts`, input1)
            .then((res) => {
              console.log(res)
             });  }
 /***********************Remove*********** */
          
            const handleRemove =(id)=>{
             axios.delete(`http://localhost:3007/posts/${id}` )
              .then((res) => {
              console.log(res)
              
             });
             }
 /*****************Edit***************** 
 const [articleId, setArticleId] = useState(0);
 useEffect(() => {

  const article = {
    title:"",
    year:"",
    description:""
}
    
  axios.post('http://localhost:3000/posts/', article)
      .then(response => setArticleId(response.data.id));
*/

    
    return (
        <div className= "" >
              <div id="forme">
                <form  onSubmit={handlesubmit} >
                <input  value={input1.title} onChange={handleChange} type='text' name='title' placeholder='enter movie name' /> <br/>
                <input value={input1.year}  onChange={handleChange} type='text' name='year' placeholder='enter year release' /><br/>
                <input value={input1.genre}  onChange={handleChange} type='text' name='description' placeholder='enter description movie' /><br/>
                <button  className="btn-submit" type="submit" >Submit</button>
                {/* <button className="button" type="remove" form="form1" onClick={()=>HandleRemove()} value="Remove">Delete</button>  */}
                </form> <br></br>
                </div>
              <div className=" omouri d-flex flex-wrap">
                {movie.filter(el=>el.title.toLowerCase()).map(el=>   
                <Card  style={{ width: '14rem'}}>
                <Card.Img className="image"variant="top" src={el.imageUrl} style={{height: '350px'}} />
                <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>      
                </Card.Text>
                <i className="far fa-star etoile"></i>
                
                <Button className="button"  type="remove"  onClick={() =>handleRemove(el.id)} value="Remove" >Delete</Button>
                
                </Card.Body>
                </Card>  )}
                </div>
                <hr></hr>
        </div>
        
       
        
        )
}
 
  
}

export default  Mahdi ;
