import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from './../assets/Home.JPG';
import "../styles/Home.css";

function Home(){
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}></div>
    )
}
export default Home;