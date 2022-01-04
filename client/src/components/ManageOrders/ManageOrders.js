import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import AdminNav from '../AdminNav/AdminNav';
import { EditOrder, RemoveOrders, GetOrders } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';
import './ManageOrders.css';

const ManageOrders = () => {

    const [allorders, setAllOrders] = useState([]);
  
    const editOrder = async (_id, status) => {

        const updatedorder = { _id, status }
        const res = await EditOrder(updatedorder);

        try{
            if (!res.data.error)
            {
              toast.success(res.data.data);
              setAllOrders(
                allorders.map((order) => 
                    order._id === _id ? {...order, status: status } : order
                )
              )
            }
        } catch (err) {
            if (err.response)
            {
              toast.error(`${ err.response.data.error }`);
            }
        }
    }

    const removeTodaysOrders = async () => {
        
        const res = await RemoveOrders();

        try{
            if (!res.data.error)
            {
              toast.success(res.data.data);
              setAllOrders([]);
            }
          } catch (err) {
            if (err.response)
            {
              toast.error(`${ err.response.data.error }`);
            }
          }
    }

    useEffect( async () => {
        
        const res = await GetOrders(); 
    
        try{
            if (!res.data.error)
              {
                setAllOrders(res.data);
              }
        } catch (err) {
            if (err.response)
            {
                toast.error(`${ err.response.data.error }`);
            }
        }
    
    },[])

    return (
        <>
            <AdminNav />
            <ToastContainer position="bottom-left" bodyClassName="toastBody"/>
            <div className="admin_items">
            <div className="title-orders">
                <div className="title">
                    <Icon icon="ant-design:shopping-cart-outlined" className="title-icon"/>
                    <h1>Manage Orders</h1>
                </div>
                <button className="viewall-btn deleteorders" onClick={() => removeTodaysOrders()}>
                    Delete Today 's Orders
                </button>
            </div>
            <br />
            <div className="type_boxes">
                <div className="requests_box">
                    <div className="type_circle">
                      <h3>Requests</h3>
                      <Icon icon="cil:book" className="title-icon"/>
                    </div>
                    {allorders.map((request) => {
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
                                        <button className="primary" 
                                          onClick={() => editOrder(request._id, "Request Rejected")}> REJECT
                                        </button>
                                        <button className="secondary" 
                                          onClick={() => editOrder(request._id, "Being Prepared")}> ACCEPT
                                        </button>
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
                    {allorders.map((request) => {
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
                                        <button className="primary" 
                                          onClick={() => editOrder(request._id, "Ready To Pick")}> MARK AS DONE
                                        </button>
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
                    {allorders.map((request) => {
                        if(request.status==="Ready To Pick")
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
                                        <button className="primary"
                                          onClick={()=> editOrder(request._id, "Order Picked Up")}> PICKED UP
                                        </button>
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
