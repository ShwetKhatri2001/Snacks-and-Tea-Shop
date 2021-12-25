import React from 'react';
import "./ItemCard.css";

const ItemCard = ({ item} ) => {

    const { itemimg, name, price, quantity} = item;

    return (
        <div className="itemdiv">
            <img src={itemimg} alt={name} className="itemimg"/>
            <h4 className="left_detail item_detail">{name}</h4>
            <h4 className="left_detail item_detail">&#8377;  {price}</h4>
            <button className="addbtn">Add</button>
        </div>
    )
}

export default ItemCard
