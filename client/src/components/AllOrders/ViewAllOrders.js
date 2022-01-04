import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { GetOrders } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';
import './ViewAllOrders.css';

const ViewAllOrders = () => {

  const [allorders, setAllOrders] = useState([]);

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
    <div>
      <div className="title">
          <Icon icon="clarity:group-solid" className="title-icon"/>
          <h1>All Orders</h1>
      </div>

      <div className="ordertable">
          <ToastContainer position="bottom-left" bodyClassName="toastBody"/>
          <thead>
            <tr className="orderrow">
              <th>Order No</th>
              <th>Placed At</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { allorders.map((order) => {
              return (
                <tr key={order.orderno} className="orderrow">
                  <td>{order.orderno}</td>
                  <td>{order.placedat}</td>
                  <td>{order.name}</td>
                  <td>{order.status}</td>
                </tr>
              )
            })}
          </tbody>
      </div>

    </div>

  );
}

export default ViewAllOrders;
