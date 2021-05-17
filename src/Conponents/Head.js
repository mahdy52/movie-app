import React from 'react';
import '../App.css';
import{Navbar,Form,FormControl,Button,Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';




function Navigation() {
  


  
  return (
    <div>
 
 <Navbar bg="dark" expand="lm">
  <Navbar.Brand className="mymy" href="#home">CinéHome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Link className="acc" to="/">Accueil</Link>
      <Link className="acc" to="/About">A propos</Link>
      <Link className="acc" to="/Favorite">Favorite</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="chercher ici ..." className="ml-sm-2 input" />
      <Button  className="chercher"variant="outline-success" placeholder="cherchher ici...">Chercher</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  
  
    
    </div>
    
  )
  
  
}

export default Navigation;