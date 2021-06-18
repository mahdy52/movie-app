import React, { useEffect, useLayoutEffect } from 'react'; 
import{Carousel, Container} from "react-bootstrap";
import {Card,Button} from 'react-bootstrap';
import Navigation from './Head';
import { useState } from 'react';
import axios from 'axios';

  const Home = ({getfavoris,favoriteMovie}) => {

  const[input,SetInput] = useState('')
  const getInput = (e) =>{
  SetInput (e.target.value)

        /******Data get****/
   
  }
const [movie,setMovie] = useState([])
const getMovie = ()=>{
  axios.get('http://localhost:3008/posts')
  .then((response) =>    
  setMovie(response.data) 
           ) 
    }
    useEffect(()=>
    getMovie(),[]
    )
    return (
      <div>
        <div>
              
          <Navigation getInput ={getInput} />
            
            </div>
            
              <div className="backgraund"> 
                <h1 className="titre">Films, séries TV et bien plus en illimité.</h1>
                <h5 className="slogon">Où que vous soyez. Annulez à tout moment.</h5>
              </div>
              <hr></hr>
                <div className="propos">
                  <h1>Regardez Netflix sur votre TV.</h1><br/>
                  <p>Téléchargez vos séries préférées pour les regarder hors connexion.
                   Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.</p>
                </div>
                   <div className="koua"> 
                      <Carousel className="">
                      <Carousel.Item className="">
                      <img className=" CaousselPicture d-block w-100"src="https://dvdtoile.com/FILMS/70/70331.jpg"alt="First slide" />
                      <Carousel.Caption>
            
                      </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className=" CaousselPicture d-block w-100 "src="https://images-na.ssl-images-amazon.com/images/I/71F6O5u-dzL._AC_SL1124_.jpg"alt="Second slide"/>
                      <Carousel.Caption>
                      </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                        <img className=" CaousselPicture d-block w-100 "src="https://media.services.cinergy.ch/media/box1600/d2c3f0c1a56d8e3b98857efce65c8496d4e8c602.jpg"alt="Second slide"/>
                      <Carousel.Caption>
                      </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                        <img className=" CaousselPicture d-block w-100 "src="https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F5b7%2F28a%2F706e4da7e50744e0344fe4cdb4%2Fbad-boys-for-life%7Cmovies-172048-21682855.jpg?facedetect=1&quality=8"alt="Second slide"/>
                      <Carousel.Caption>
                      </Carousel.Caption>
                      </Carousel.Item>
                     
                     
                      <Carousel.Item>
                      <img className=" CaousselPicture d-block w-100"src="http://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F7e0%2F37f%2F0aa1bd3f0ff8da267972afced6%2Fkingsman-le-cercle-d-or%7Cmovies-237561-21436828.jpg?format=600x900&facedetect=1&quality=85"alt="Third slide"/>
                      <Carousel.Caption>
                      </Carousel.Caption>
                      </Carousel.Item>
                      </Carousel>

                    </div>
                      <hr></hr>
                      <Container>
                      <div className="d-flex flex-wrap justify-content-around">
            
                          {movie.filter(el=>
                          el.title.toLowerCase().includes(input.toLowerCase())).map(el=>  
                          <Card className="carde" style={{ width: '14rem'}}>
                          <Card.Img className="image"variant="top" src={el.imageUrl} style={{height: '350px'}} />
                          <Card.Body>
                          <Card.Title>{el.title}</Card.Title>
                          <Card.Text>      
                          </Card.Text>
                          <i className="far fa-star etoile"></i>
                          {console.log('moviiiiiiiiiiiiiii',el.imageUrl)} 
                          <Button className="button" variant="" onClick={()=> {getfavoris(el)}}>
                          Ajouter favorite</Button>
                          </Card.Body>
                          </Card>  )}
                      </div>
                            <hr></hr>
                          </Container>

         </div>
    )
}
export default Home;
