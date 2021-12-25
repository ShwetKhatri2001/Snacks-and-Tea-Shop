import React from 'react';

const EmpCard = ({employee}) => {

    const { empname, emprole, empimg } = employee;

    return (
    <div className="itemdiv empdiv">
        <img src={empimg} alt={empname} className="itemimg"/>
        <h4 className="left_detail item_detail">{empname}</h4>
        <h4 className="left_detail item_detail">{emprole}</h4>
    </div>
    )
}

export default EmpCard
