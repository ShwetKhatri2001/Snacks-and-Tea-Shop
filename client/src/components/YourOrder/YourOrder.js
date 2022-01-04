import React, { useState, useEffect, createContext, useContext } from 'react';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import OrderCard from "../../components/OrderCard/OrderCard";
import './YourOrder.css';

const OrderContext = createContext();

const YourOrder = () => {

    const {myorder, setMyOrder} = useContext(OrderContext);
    const [subtotal, setSubTotal] = useState(0);
    const [totalitems, setTotalItems] = useState(0);

    useEffect(() => {

        setTotalItems(myorder.length);
        
        setSubTotal(0);
        myorder.map((item) => {
            setSubTotal((prevSum) => prevSum + ( item.quantity * item.price));
        })

        console.log(subtotal);

    },[myorder])

    

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
            {
                myorder.length > 0 ?
              <>
              <div>
                { myorder.map((item,i) => <OrderCard key={i} item={item}/> )}
              </div>
              <div className="checkout-box">
                 <div className="checkout-title">
                    <Icon icon="heroicons-solid:currency-rupee" className="checkout-icon"/>
                    <h3>Checkout Order</h3>
                 </div>
                 <ul>
                    <li>SubTotal</li>
                    <li className="orderitem">&#8377; {subtotal} </li>
                    <li>No of Items</li>
                    <li className="orderitem">{totalitems}</li>
                 </ul>
                 <Link to="/placeorder">
                    <button className="placebtn">Place Order</button>
                 </Link>
              </div>
              </>
              : 
              <>
                <div className="emptydiv">
                    <div className="emptymsg">Your Order is Empty ! Add Items and Enjoy your Food !</div>
                    <Link to="/allitems">
                    <button className="viewall-btn">
                        View All Items
                    </button>
                    </Link>
                </div>
              </>
            }
            </div>
        </>
    )
}

export default YourOrder;
export { OrderContext };
