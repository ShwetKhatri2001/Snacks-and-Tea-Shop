import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vinayaklogo from "../../assets/vinayaklogo.png";
import profileavatar from "../../assets/profileavatar.png";
import { Icon } from '@iconify/react';
import "./Navbar.css";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="heading">
                <Link to="/"><img src={vinayaklogo} alt="Vinayak snacks and Tea" className="navimg"/></Link>
                <Link to="/" className="shoplink" ><h3>Vinayak Snacks and Tea</h3></Link>
            </div>
            <div className="right_nav">
                <Link to="/menudetails">
                <button className="viewall-btn">
                    Shop Staff
                </button>
                </Link>
               <Link to="/yourorder"><Icon icon="ant-design:shopping-cart-outlined" className="title-icon order-icon"/></Link>
               <img src={profileavatar} alt="User Profile" className="navimg"/>
            </div>
        </div>
    )
}

export default Navbar
