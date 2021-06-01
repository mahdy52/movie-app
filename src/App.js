import React from 'react';
import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import Bottom from './Conponents/Footer';
import Home from './Conponents/Home';
import About from './Conponents/About';
import Favorite from './Conponents/Favorite';
import Mahdi from './Conponents/Dashboard';


function App() {

 
  return ( 
    
  
    <div>
      
  

       <BrowserRouter>
       
          <Route exact path="/"component={Home} /> 
          <Route exact path="/About"component={About} />
          <Route exact path="/Favorite"component={Favorite} />
          <Route  path="/Dashboard"component={Mahdi} /> 
       </BrowserRouter>

      <br></br>
      <br></br>
      
      <Bottom />
     
      
    </div>
    
    
    
  )
}

export default App ;
