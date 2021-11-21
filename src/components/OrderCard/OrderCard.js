import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import "./OrderCard.css";

const OrderCard = ({item}) => {

    const { itemimg, name, price, quantity} = item;

    const [currquantity, setQuantity] = useState(quantity);

    const handleMinus = () => {
        if(currquantity > 0)
           setQuantity(currquantity - 1);
    }

    const handlePlus = () => {
        setQuantity(currquantity + 1)
    }

    return (
        <div className="ordercard">
           <img src={itemimg} alt="itempic" className="itemimg"/>
           <div claassName="item_details">
                <h4 className="left_detail">{name}</h4>
                <h4 className="left_detail">&#8377;  {price * currquantity}</h4>
                <br/>
                <div className="right_detail">
                <div className="quantity">
                    <button className="minuscountbtn" onClick={handleMinus}>-</button>
                    <button className="currcount">{currquantity}</button>
                    <button className="pluscountbtn" onClick={handlePlus}>+</button>
                </div>
                <Icon icon="fluent:delete-16-filled" className="delete_icon"/>
                </div>
           </div>
            
        </div>
    )
}

export default OrderCard
