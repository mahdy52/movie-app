import React, { useState } from 'react';
import Navigation from './Head';
import {Card }from 'react-bootstrap'


const Favorite = ({favoriteMovie}) => {



return (
    <div>

      {favoriteMovie.map((el) => (
       <div className="d-flex flex-wrap justify-content-between">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={el.imageUrl} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>
                <div className="mr-auto">
                  {el.rating}
                  <img src="/favoris.png" className="favoris" />
                  <button ><img src="/bouton.png" style={{ width: "20px" }} /></button> 
                </div>
                <h6>{el.year}/</h6>
              </Card.Text>
            </Card.Body>
          </Card>
       </div>
      ))
}
      </div>
)
}
export default Favorite;