import React from 'react';
import { Icon } from '@iconify/react';
import AllOrders from './AllOrders.list'
import './ViewAllOrders.css';

const ViewAllOrders = () => {

  const renderData = (data, index) => {

    return (
      <tr key={index} className="orderrow">
        <td>{data.orderno}</td>
        <td>{data.placedat}</td>
        <td>{data.name}</td>
        <td>{data.status}</td>
      </tr>
    );
  }

  return (
    <div>
      <div className="title">
          <Icon icon="clarity:group-solid" className="title-icon"/>
          <h1>All Orders</h1>
      </div>

      <div className="ordertable">
          <thead>
            <tr className="orderrow">
              <th>Order No</th>
              <th>Placed At</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {AllOrders.map(renderData)}
          </tbody>
      </div>

    </div>

  );
}

export default ViewAllOrders;
