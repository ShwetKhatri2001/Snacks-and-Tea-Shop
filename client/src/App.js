import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderContext } from "./components/YourOrder/YourOrder";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import YourOrder from "./components/YourOrder/YourOrder";
import AllItems from "./components/AllItems/ViewAllItems";
import AllOrders from "./components/AllOrders/ViewAllOrders";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import MenuDetails from "./components/MenuDetails/MenuDetails";
import EmpDetails from "./components/EmpDetails/EmpDetails";
import SignIn from "./components/SignIn/SignIn";
import ManageMenu from "./components/ManageMenu/ManageMenu";
import ManageEmp from "./components/ManageEmp/ManageEmp";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [myorder, setMyOrder] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <OrderContext.Provider value={{myorder,setMyOrder}}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/allitems" element={<AllItems/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/yourorder" element={<YourOrder/>} />
          <Route exact path="/placeorder" element={<PlaceOrder/>} />
          <Route exact path="/allorders" element={<AllOrders/>} />
          <Route exact path="/manageorders" element={<ManageOrders/>} />
          <Route exact path="/menudetails" element={<MenuDetails />} />
          <Route exact path="/empdetails" element={<EmpDetails/>} />
          <Route exact path="/managemenu" element={<ManageMenu />} />
          <Route exact path="/manageemp" element={<ManageEmp />} />
        </Routes>
        </OrderContext.Provider>
      </Router>
    </div>
  );
}

export default App;
