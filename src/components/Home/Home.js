import React from 'react'
import{ Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1> Welcome to Vinayak Snacks and Tea ! </h1>
            <br />
            <Link to="/yourorder"><button className="placebtn">Your Order</button></Link>
            <Link to="/placeorder"><button className="placebtn">Place Order</button></Link>
        </>
    )
}

export default Home
