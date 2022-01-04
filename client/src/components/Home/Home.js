import React, { useState, useEffect } from 'react';
import heroimage from "../../assets/hero image.png";
import{ Link } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import AllItems from "../AllItems/AllItems.list.js"
import { GetTodaysItems } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';
import './Home.css';

const Home = () => {

    const [todays_sp, setTodayssp] = useState([]);

    useEffect( async () => {
        
        const res = await GetTodaysItems(); 

        try{
            if (!res.data.error)
              {
                setTodayssp(res.data);
              }
        } catch (err) {
            if (err.response)
            {
                toast.error(`${ err.response.data.error }`);
            }
        }

    },[])

    return (
        <>
            <ToastContainer position="bottom-left" bodyClassName="toastBody"/>
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
                { todays_sp.map((item,i) => <ItemCard item={item} key={i} /> ) }
            </div>
        </>
    )
}

export default Home
