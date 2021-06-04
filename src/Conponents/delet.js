import React from 'react';
import {Card,Button} from 'react-bootstrap';
import  {useState,useEffect} from 'react';
import axios from 'axios';

function DeletGet ({input,el}) {


   const [film, setFilme] = useState([])
   
   
     const getfilm = ()=>{
  axios.get('http://localhost:3000/posts')
     .then ((response) => {setFilme(response.data);
   });
     console.log(film);
 } 

    useEffect(()=> {getfilm() },[])

  


    
  return(
    <div>
{
        film.filter(el=>el.title.toLowerCase().includes(input.toLowerCase())).map(el=>
      <div>
        <Card className="carde" style={{ width: '14rem'}}>
        <Card.Img className="image"variant="top" src={el.imageUrl} style={{height: '350px'}} />
        <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>      
        </Card.Text>
         <i className="far fa-star etoile"></i>
        <Button className="button" variant="">Ajouter favorite</Button>
        </Card.Body>
        </Card>

      </div> 
     
    )}


{/* **************Get   +  delet*************** */}
    </div>
   )

 }

export default DeletGet