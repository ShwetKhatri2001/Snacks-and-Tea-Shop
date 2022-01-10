import React, { useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';
import ItemCard from "../ItemCard/ItemCard";
import { GetItems } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';
import './MenuDetails.css';

const MenuDetails = () => {

    const [allitems, setAllItems] = useState([]);
    const navigate = useNavigate();

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
                if(err.response.data.error === 'Please login to view this page')
                  navigate('/signin')
            }
        }
    },[])

    return(
        <div className="adminpage">
            <ToastContainer position="bottom-left" bodyClassName="toastBody"/>
            <AdminNav />
            <div className="admin_items">
                <div className="all_items">
                { allitems.map((item,i) => <ItemCard item={item} key={i} /> ) }
                </div>
                <Link to="/managemenu" className="managebtn" onClick={window.scrollTo(0,0)}>
                    <button className="viewall-btn">
                        Manage Menu
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MenuDetails;