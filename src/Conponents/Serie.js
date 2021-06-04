import React  from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';
import {useState,useEffect} from "react";

function Movie ({input}) {

    /******Data get****/
    const [film, setFilme] = useState([])
   
 function getfilm (){
      axios.get('http://localhost:3000/posts')
      .then((response) => {
        film.push(response);
        console.log(film)
      });
   }
                

    useEffect( ()=> getfilm() ,[]);


  return (
   
  film.filter(el=>el.title.toLowerCase().includes(input.toLowerCase())).map(el=>{
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
     }
    )
  );
}

export default Movie ;