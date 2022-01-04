import React, { useState, useContext } from 'react';
import { OrderContext } from "../YourOrder/YourOrder";
import "./ItemCard.css";

const ItemCard = ({ item } ) => {

    const [added, setAdded] = useState(false);

    const { _id, itemimg, name, price } = item;
    const {myorder, setMyOrder} = useContext(OrderContext);

    const addtoOrder = (newitem) => {
         setMyOrder([...myorder, { ...newitem, quantity: 1}]);
         setAdded(true);
    }

    return (
        <div className="itemdiv">
            <img src={itemimg} alt={name} className="itemimg"/>
            <h4 className="left_detail item_detail">{name}</h4>
            <h4 className="left_detail item_detail">&#8377;  {price}</h4>
            {
                added 
                ? <button className="addbtn addedbtn" >Added</button>
                : <button className="addbtn" onClick={() => addtoOrder(item)}>Add</button>
            }
        </div>
    )
}

export default ItemCard
