import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import AdminNav from '../AdminNav/AdminNav';
import AllOrders from '../AllOrders/AllOrders.list'
import './ManageOrders.css';

const ManageOrders = () => {

    const [requests,setRequests] = useState([]);
    const [pending, setPending] = useState([]);
    const [finished, setFinished] = useState([]);

    // useEffect(() => {
    //     return AllOrders.map((order) => {
    //         switch(order.status){
    //             case "Request Received":
    //                 setRequests([...requests,order]);
    //                 break;
    //             case "Being Prepared": 
    //                 setPending([...pending,order]);
    //                 break;
    //             case "Ready to Pick": 
    //                 setFinished([...finished,order]);
    //         }
    //     })
    // },[AllOrders])

    return (
        <>
            <AdminNav />
            <div className="admin_items">
            <div className="title-orders">
                <div className="title">
                    <Icon icon="ant-design:shopping-cart-outlined" className="title-icon"/>
                    <h1>Manage Orders</h1>
                </div>
            </div>
            <br />
            <div className="type_boxes">
                <div className="requests_box">
                    <div className="type_circle">
                      <h3>Requests</h3>
                      <Icon icon="cil:book" className="title-icon"/>
                    </div>
                    {AllOrders.map((request) => {
                        if(request.status==="Request Received")
                          {
                            return(
                                <div className="request_box" key={request.orderno}>
                                    <div className="rqrow"><h3>#{request.orderno}</h3><h4>{request.placedat}</h4></div>
                                    <div className="rqrow"><h4>{request.name}</h4><h4>{request.phone}</h4></div>
                                    {
                                        request.items.map((item) => {
                                            return(
                                                <div className="rqrow itemrow">
                                                  <h3>{item.name}</h3><h3>{item.quantity}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="actionbtns">
                                        <button className="primary">REJECT</button>
                                        <button className="secondary">ACCEPT</button>
                                    </div>
                                </div>
                            )
                          }
                    })}
                </div>
                <div className="requests_box">
                    <div className="type_circle">
                        <h3>Pending</h3>
                        <Icon icon="ic:round-pending-actions" className="title-icon" height="60"  color="#444"/>
                    </div>
                    {AllOrders.map((request) => {
                        if(request.status==="Being Prepared")
                          {
                            return(
                                <div className="request_box" key={request.orderno}>
                                    <div className="rqrow"><h3>#{request.orderno}</h3><h4>{request.placedat}</h4></div>
                                    <div className="rqrow"><h4>{request.name}</h4><h4>{request.phone}</h4></div>
                                    {
                                        request.items.map((item) => {
                                            return(
                                                <div className="rqrow itemrow">
                                                  <h3>{item.name}</h3><h3>{item.quantity}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="actionbtns">
                                        <button className="primary">MARK AS DONE</button>
                                    </div>
                                </div>
                            )
                          }
                    })}
                </div>
                <div className="requests_box">
                    <div className="type_circle">
                        <h3>Finished</h3>
                        <Icon icon="bi:clipboard-check" className="title-icon"/>
                    </div>
                    {AllOrders.map((request) => {
                        if(request.status==="Ready to Pick")
                          {
                            return(
                                <div className="request_box" key={request.orderno}>
                                    <div className="rqrow"><h3>#{request.orderno}</h3><h4>{request.placedat}</h4></div>
                                    <div className="rqrow"><h4>{request.name}</h4><h4>{request.phone}</h4></div>
                                    {
                                        request.items.map((item) => {
                                            return(
                                                <div className="rqrow itemrow">
                                                  <h3>{item.name}</h3><h3>{item.quantity}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="actionbtns">
                                        <button className="primary">VIEW RECEIPT</button>
                                    </div>
                                </div>
                            )
                          }
                    })}
                </div>
            </div>
            </div>
        </>
    )
}

export default ManageOrders;
