import React, { useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import { OrderContext } from "../YourOrder/YourOrder";
import "./OrderCard.css";

const OrderCard = ({item}) => {

    const { _id, itemimg, name, price, quantity} = item;

    const [currquantity, setQuantity] = useState(quantity);
    const {myorder, setMyOrder} = useContext(OrderContext);

    const handleMinus = () => {
        if(currquantity > 0)
           setQuantity(currquantity - 1);
        setMyOrder(
            myorder.map((item) => 
                item._id == _id ? {...item, quantity: currquantity - 1} : item
            )
        )
    }

    const handlePlus = () => {
        setQuantity(currquantity + 1)
        setMyOrder(
            myorder.map((item) => 
                item._id == _id ? {...item, quantity: currquantity + 1} : item
            )
        )
    }

    const removeFromOrder = (removeitem) => {
        setMyOrder(myorder.filter((item) => item._id !== removeitem._id ))
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
                <Icon icon="fluent:delete-16-filled" className="delete_icon" onClick={() => removeFromOrder(item)}/>
                </div>
           </div>
        </div>
    )
}

export default OrderCard
