import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import AdminNav from '../AdminNav/AdminNav';
import EmpCard from '../EmpCard/EmpCard';
import { GetEmployees } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';

const EmpDetails = () => {

    const [allemployees, setAllEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect( async () => {
      
        const res = await GetEmployees(); 
  
        try{
            if (!res.data.error)
              {
                setAllEmployees(res.data);
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
                { allemployees.map((employee,i) => <EmpCard employee={employee} key={i} /> ) }
                </div>
                <Link to="/manageemp" className="managebtn" onClick={window.scrollTo(0,0)}>
                    <button className="viewall-btn empbtn">
                        Manage Employees
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EmpDetails;