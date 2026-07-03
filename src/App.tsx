import React from "react";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Dairy from "./Dairy";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/Veg">Veg</Link>
          <Link to="/NonVeg">Non Veg</Link>
          <Link to="/Dairy">Dairy</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Veg" element={<Veg></Veg>}></Route>
            <Route path="/NonVeg" element={<Nonveg></Nonveg>}></Route>
            <Route path="/Dairy" element={<Dairy></Dairy>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
