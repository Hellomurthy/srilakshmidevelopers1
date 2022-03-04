import React from 'react';
import {Link} from "react-router-dom";
import AboutUs from './../assets/projects/Aboutus.jpg';
import "../styles/About.css";

function About(){
    return (
        <div className='about'>
            <div className='aboutTop' style={{backgroundImage:`url(${AboutUs})`}} ></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>
                Since 10 yrs we're busy with making your dreams comes true....
                </p>

            </div>
        </div> 
    )
}
export default About;