import React, { useState} from 'react';
import{ Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { PlaceNewOrder } from '../../axios/instance';
import  AllOrders  from '../AllOrders/AllOrders.list';
import { ToastContainer, toast } from 'react-toastify';
import "./PlaceOrder.css";

const PlaceOrder = () => {

   const [orderData, setOrderData] = useState({
      orderno: 0,
      placedat: "",
      name: "",
      phone: "",
      status: "",
      items: [],
      subtotal: 0
   });

   const [showOrder, setShowOrder] = useState(false);

   const { orderno, placedat, name, phone, status, items, subtotal } = orderData;
   
   let event_name,event_value;
    const handleFormChange = (e) => {
        event_name = e.target.name;
        event_value = e.target.value;
        setOrderData({...orderData,[event_name]:event_value})
    }
   
   const submitOrder = async () => {

      const newplacedat = new Date().toLocaleTimeString();
      const newdata = {...AllOrders[1], name, phone, placedat: newplacedat};

      const res = await PlaceNewOrder(newdata);

      try{

         if (!res.data.error)
         {
            toast.success('Your order is placed successfully');
            setShowOrder(true);
            clearFields();
            console.log(res.data);
            setOrderData({ ...newdata,
               orderno: res.data.orderno,
               status: res.data.status
            })
         }
      } catch (err) {
         if (err.response)
         {
         toast.error(`${ err.response.data.error }`);
         }
      }
      
   }

   const clearFields = () => {
      setOrderData({
         name: "",
         phone: "",
         orderno: 0,
         placedat: "",
         status: ""
      })
   }
   
    return (
        <>
           <ToastContainer position="bottom-right" bodyClassName="toastBody"/>
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
                    <button className="detailsbtn" onClick={() => submitOrder(true)}>Submit Order</button>
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
                    <li className="orderitem"> {orderno} </li>
                    <li>Placed at</li>
                    <li className="orderitem"> {placedat} </li>
                    <li>Status</li>
                    <li className="orderitem"> {status} </li>
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
