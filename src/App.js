import React from 'react';
import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import Bottom from './Conponents/Footer';
import Home from './Conponents/Home';
import About from './Conponents/About';
import Favorite from './Conponents/Favorite';
import Mahdi from './Conponents/Dashboard';
import { useState } from 'react';



function App({getMovie}) {

    const [favoriteMovie,setfavoriteMovie] = useState ([]);
/****************Add to favorite****** */

    const getfavoris = (el)=>{
    favoriteMovie.push (el)
    console.log('favooooooooooooooo',favoriteMovie);


}
  return ( 
    
  
    <div>
      
  

       <BrowserRouter>
       
          <Route exact path="/"component={Home}  getfavoris={getfavoris}/> 
          <Route exact path="/About"component={About} />
          <Route exact path="/Favorite"component={Favorite} favoriteMovie = {favoriteMovie}/>
          <Route  path="/Dashboard"component={Mahdi} /> 
          
      </BrowserRouter>
         < Bottom />

      <br></br>
      <br></br>
      
    
      
     
      
    </div>
    
    
    
  )
}

export default App ;
