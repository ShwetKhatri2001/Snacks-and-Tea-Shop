import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom'
import './AdminNav.css';

const AdminNav = () => {

    const location = useLocation();

    const AdminLinks = [
        {
           name: "Menu",
           icon: "fluent:food-24-filled",
           linkto: "/menudetails",
        },
        {
           name: "Employees",
           icon: "clarity:group-solid",
           linkto: "/empdetails"
        },
        {
            name: "Orders",
            icon: "ant-design:shopping-cart-outlined",
            linkto: "/manageorders"
        }
    ]

    return (
        <div className="adminnav">
            {
                AdminLinks.map((obj, idx) => 
                    <Link to={obj.linkto} key={idx} className={ location.pathname  === obj.linkto ? `admintitle activetitle` : `admintitle`}
                        onClick={window.scrollTo(0,0)}>
                        <Icon icon={obj.icon} className="title-icon"/>
                        <h1>{obj.name}</h1>
                    </Link>
                    )
            }
        </div>
    )
}

export default AdminNav
