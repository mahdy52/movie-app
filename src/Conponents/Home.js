import React from 'react';
import{Carousel, Container} from "react-bootstrap";
import Filme from './Serie';

const Home = () => {
    return (
        <div>
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
    <div>
    <Carousel className="koua">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://back.femininbio.com/attachments/2020/11/20/portrait/w800/31382-capture-decran-2020-03-18-a-17-49-48.png"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://flixpatrol.com/runtime/cache/files/posters/x/w350/xgwvjewoxnjhvxkw619cmzppjdq.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100"src="https://www.dreadcentral.com/wp-content/uploads/2020/09/repossession.jpg"alt="Third slide"/>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    <hr></hr>
    <Container>
      <div className="d-flex flex-wrap justify-content-around">
      <Filme />    
      </div>

   </Container>

  </div>
    )
}
export default Home;
