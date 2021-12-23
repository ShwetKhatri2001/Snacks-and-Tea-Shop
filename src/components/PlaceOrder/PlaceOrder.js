import React, { useState} from 'react';
import{ Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./PlaceOrder.css";

const PlaceOrder = () => {

   const [orderData, setOrderData] = useState({
      name: "",
      phone: ""
   });

   const [showOrder, setShowOrder] = useState(false);

   const { name, phone } = orderData;
   
   let event_name,event_value;
    const handleFormChange = (e) => {
        event_name = e.target.name;
        event_value = e.target.value;
        setOrderData({...orderData,[event_name]:event_value})
        console.log(name,phone);
    }

    return (
        <>
           <div className="title">
                <Icon icon="heroicons-solid:currency-rupee" className="title-icon"/>
                <h1>Place Order</h1>
            </div>
            <div className="orders-content">
            <div>
               <div className="order-inputs">
                  <h4 className="note">Enter Details : </h4>
                  <input 
                     type="text" 
                     className="inputfield"
                     placeholder="Name"
                     name="name"
                     value={name}
                     onChange={handleFormChange}
                  />
                  <input 
                     type="phone" 
                     className="inputfield"
                     placeholder="Phone"
                     name="phone"
                     value={phone}
                     onChange={handleFormChange}
                  />
               </div>
                <div className="details-box">
                 <div className="checkout-title">
                    <Icon icon="heroicons-solid:currency-rupee" className="checkout-icon"/>
                    <h3>Checkout Order</h3>
                 </div>
                 <ul>
                    <li>Sub Total</li>
                    <li className="orderitem">&#8377; 100 </li>
                    <li>No of Items </li>
                    <li className="orderitem">4 </li>
                    <li>Items Ordered : </li>
                    <li className="orderitem"> Samosa x 2 </li>
                    <li className="orderitem"> Aaloo Paratha x 1 </li>
                    <li className="orderitem"> Coffee x 1 </li>
                 </ul>
                 <div  className="checkout-title">
                    <Link to="/yourorder"><button className="detailsbtn">Check Details</button></Link>
                    <button className="detailsbtn" onClick={() => setShowOrder(true)}>Submit Order</button>
                 </div>
                </div>
              </div>
              {showOrder && <div>
                <div className="title" style={{color: '#88C198'}}>
                    <Icon icon="teenyicons:tick-circle-solid" className="title-icon"/>
                    <h1>Your Order is placed successfully</h1>
                </div>
                <div className="details-box">
                 <div className="checkout-title">
                    <Icon icon="icon-park-outline:transaction-order" className="checkout-icon"/>
                    <h3>Order Details</h3>
                 </div>
                 <ul>
                    <li>Order No</li>
                    <li className="orderitem"> 152 </li>
                    <li>Placed at</li>
                    <li className="orderitem">7:46 PM</li>
                    <li>Status</li>
                    <li className="orderitem">Request sent</li>
                 </ul>
                 <h4 className="note">Keep checking the status of your order in all orders.</h4>
                 <h4 className="note">
                    Enjoy Your Food 
                    <Icon icon="emojione:face-savoring-food" className="smile-icon"/>
                 </h4>
                </div>
                <Link to="/allorders">
                  <button className="placeview-btn">
                     View All Orders
                  </button>
                </Link>
                
              </div>
              }
            </div>
        </>
    )
}

export default PlaceOrder
