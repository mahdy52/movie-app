
import React, {useState,useEffect}from 'react'
import {Card,Button} from 'react-bootstrap'

function Filme () {
  const [film, setFilm] = useState([])
  const getFilm = ()=>{
    
    fetch('films.json').then(
          response => response.json()).then 
                   (movies => setFilm(movies));
  }
  
  useEffect(()=> {getFilm()
  },[])

  console.log(film)
  return(
    
      film.map(el=>
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
      )
  
   )

 }

export default Filme;