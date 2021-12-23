import React from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';
import AllItems  from "../AllItems/AllItems.list.js";
import ItemCard from "../ItemCard/ItemCard";
import './MenuDetails.css';

const MenuDetails = () => {

    return(
        <div className="adminpage">
            <AdminNav />
            <div className="admin_items">
                <div className="all_items">
                { AllItems.map((item,i) => <ItemCard item={item} key={i} /> ) }
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