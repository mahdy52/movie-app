import React from 'react';
import '../App.css';
import{Navbar,Form,Button,Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';




function Navigation({getInput,favoriteMovie}) {
 

 
  return (
    <div>


        
 
    

    {/* <input type="text" placeholder="Search" onChange = {getInput}/>
      <Button  className="chercher"variant="outline-success" placeholder="cherchher ici...">Chercher</Button>
     */}

<div class="flexbox">
  <div class="search">
   
    <div>
      <input type="text" placeholder="Search . . ." required onChange = {getInput} />
    </div>
  </div>
</div>

      <nav className="navMenu ">
          <Link to="/">Accueil</Link>
          
          <Link to="/About">Apropos</Link> 

          <Link to="/Favorite">Favorite</Link>

          <div class="dot"></div>
        </nav> 

  
 </div>
  )
  
  
}

export default Navigation;