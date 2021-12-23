import React from 'react';
import { Icon } from '@iconify/react';
import{ Link } from "react-router-dom";
import OrderCard from "../../components/OrderCard/OrderCard";
import samosaimg from "../../assets/samosa.png";
import parathaimg from "../../assets/paratha.png";
import coffeeimg from "../../assets/coffee.png";
import './YourOrder.css';

const YourOrder = () => {

    const ordered_items = [
        {
           itemimg: samosaimg,
           name: "Samosa",
           price: 20,
           quantity: 2
        },
        {
           itemimg: parathaimg,
           name: "Aaloo Paratha",
           price: 40,
           quantity: 1
        },
        {
           itemimg: coffeeimg,
           name: "Coffee",
           price: 20,
           quantity: 1

        }
    ]

    return (
        <>
            <div className="title-orders">
                <div className="title">
                    <Icon icon="ant-design:shopping-cart-outlined" className="title-icon"/>
                    <h1>Your Order</h1>
                </div>
                <Link to="/allorders">
                <button className="viewall-btn">
                    View All Orders
                </button>
                </Link>
            </div>
            <div className="orders-content">
              <div>
              { ordered_items.map((item,i) => <OrderCard key={i} item={item}/> )}
              </div>
              <div className="checkout-box">
                 <div className="checkout-title">
                    <Icon icon="heroicons-solid:currency-rupee" className="checkout-icon"/>
                    <h3>Checkout Order</h3>
                 </div>
                 <ul>
                    <li>SubTotal</li>
                    <li className="orderitem">&#8377; 100 </li>
                    <li>No of Items</li>
                    <li className="orderitem">4</li>
                 </ul>
                 <Link to="/placeorder">
                    <button className="placebtn">Place Order</button>
                 </Link>
              </div>
            </div>
        </>
    )
}

export default YourOrder
