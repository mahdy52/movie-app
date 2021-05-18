import React, { useState } from 'react';
import '../App.css';
import{Navbar,Form,FormControl,Button,Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';




function Navigation({getInput}) {
 

 
  return (
    <div>
 
 <Navbar expand="lg">
  <Navbar.Brand className="mymy" href="#home">CinéHome</Navbar.Brand>
    <Nav className=" ml-auto">
      <Link className="acc" to="/">Accueil</Link> 
      <Link className="acc" to="/About">/A propos</Link>
      <Link className="acc" to="/Favorite">/Favorite</Link>
    </Nav>
    <Form inline>
    <input type="text" placeholder="Search" onChange = {getInput}/>
      <Button  className="chercher"variant="outline-success" placeholder="cherchher ici...">Chercher</Button>
    </Form>
  
</Navbar>
  
  
    
    </div>
    
  )
  
  
}

export default Navigation;