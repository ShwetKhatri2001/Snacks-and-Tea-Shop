import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import YourOrder from "./components/YourOrder/YourOrder";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/yourorder" element={<YourOrder/>} />
          <Route exact path="/placeorder" element={<PlaceOrder/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
