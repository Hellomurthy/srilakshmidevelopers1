import React, { useState } from "react";
import "../navbar.css";
import logo from './../Images/Logo.jpg'; 
import {Link} from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
        <img src={logo}  style={{height: '8vh'}} />  
      <a href="./" className="nav__brand">          
        Sri Lakshmi Developers
      </a>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
            <Link to="/About">About</Link>
        </li>
        <li className="nav__item">
            <Link to="/Projects">Projects</Link>
        </li>
        <li className="nav__item">
            <Link to="/Services">Services</Link>         
        </li>
        <li className="nav__item">
            <Link to="/Contact">Contact</Link> 
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;