import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./Pages/Product/ProductList";
import Cart from "./Pages/Cart/Cart";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path='/' element={<ProductList />} /> 
       <Route path='/cart' element={<Cart />} /> 
    </Routes>
    </div>
  );
};

export default App;
