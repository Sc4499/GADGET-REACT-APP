import React from 'react';
import './App.css';
import Header from './component/Header';
import {Routes, Route } from "react-router-dom";
import Product from './component/Product';
import Home from './component/Home';
import Cart from './component/Cart';
import Singleproduct from './component/Singleproduct';
import { CartContext } from './CartContext';

function App() {
  return (
  <>
  <CartContext.Provider>
  <Header/>
    <Routes>
        
          <Route index element={<Home />} />
          <Route path="/product" element={<Product/>} />
          <Route path='/product/:id_' element={<Singleproduct/>}/>
           <Route path='/cart' element={<Cart/>}/>  
      </Routes>
  </CartContext.Provider>
  
  </>
  
  );
}

export default App;
