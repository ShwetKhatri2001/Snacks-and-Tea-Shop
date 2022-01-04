import React, { useState, useEffect } from 'react';
import ItemCard from "../ItemCard/ItemCard";
import { GetItems } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';
import "./ViewAllItems.css";

const ViewAllItems = () => {

    const [allitems, setAllItems] = useState([]);

    useEffect( async () => {
        
        const res = await GetItems(); 

        try{
            if (!res.data.error)
              {
                setAllItems(res.data);
              }
        } catch (err) {
            if (err.response)
            {
                toast.error(`${ err.response.data.error }`);
            }
        }

    },[])

    return (
        <div className="all_items">
            <ToastContainer position="bottom-left" bodyClassName="toastBody"/>
            { allitems.map((item,i) => <ItemCard item={item} key={item._id} /> ) }
        </div>
    )
}

export default ViewAllItems
