import React from 'react';
import AllItems  from "./AllItems.list.js";
import ItemCard from "../ItemCard/ItemCard";
import "./ViewAllItems.css";

const ViewAllItems = () => {
    return (
        <div className="all_items">
            { AllItems.map((item,i) => <ItemCard item={item} key={item._id} /> ) }
        </div>
    )
}

export default ViewAllItems
