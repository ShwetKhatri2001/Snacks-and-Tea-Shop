import React from 'react';
import heroimage from "../../assets/hero image.png";
import{ Link } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import AllItems from "../AllItems/AllItems.list.js"
import './Home.css';

const Home = () => {

    return (
        <>
            <div className="banner">
                <div className="herotext">
                    <h3 className="maintext">Make your day fruitful with our taste</h3>
                    <h4 className="subtext">We care about the taste and are best at it</h4>
                </div>
                <img src={heroimage} alt="Our Hero Image"  className="heroimg" />
            </div>
            <br/>
            <div className="todays_title">
                <h3>Today's Special</h3>
                <Link to="/allitems">
                <button className="viewall-btn">
                    View All Items
                </button>
                </Link>
            </div>
            <div className="todays_items">
                { AllItems.map((item,i) => <ItemCard item={item} key={i} /> ) }
            </div>
        </>
    )
}

export default Home
