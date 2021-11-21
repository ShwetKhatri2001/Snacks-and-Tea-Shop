import React from 'react';
import { Link } from 'react-router-dom'
import vinayaklogo from "../../assets/vinayaklogo.png";
import profileavatar from "../../assets/profileavatar.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="heading">
                <Link to="/"><img src={vinayaklogo} alt="Vinayak snacks and Tea" className="navimg"/></Link>
                <Link to="/" className="shoplink" ><h3>Vinayak Snacks and Tea</h3></Link>
            </div>
            <img src={profileavatar} alt="User Profile" className="navimg"/>
        </div>
    )
}

export default Navbar
