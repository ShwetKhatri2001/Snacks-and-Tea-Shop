import React from 'react';
import { Link } from "react-router-dom";
import AdminNav from '../AdminNav/AdminNav';
import AllEmployees  from "./AllEmp.list.js";
import EmpCard from '../EmpCard/EmpCard';

const EmpDetails = () => {

    return(
        <div className="adminpage">
            <AdminNav />
            <div className="admin_items">
                <div className="all_items">
                { AllEmployees.map((employee,i) => <EmpCard employee={employee} key={i} /> ) }
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