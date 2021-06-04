import React from 'react';
import Navigation from './Head';

const About = () => {
    return (
        <div>
            <Navigation />
            <centre>
        <h3 className="about">A propos</h3>

        <div className="containerr">
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
             but also the leap into electronic typesetting, 
             remaining essentially unchanged.  
             </p>
             <button class="btne" type="button">Lire la suite</button>

        </div>
        <hr></hr>
        <hr></hr>


        </centre>

        </div>
    )
}
export default About;