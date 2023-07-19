import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Checkout from "./components/Checkout";



function App() {

  let initialItems = [{
    "name":"Toothpaste",
    "price":5,
    "in_stock": true,
    "id":1,
  },{
    "name":"Shampoo",
    "price":12,
    "in_stock": true,
    "id":2,
  },{
    "name":"Conditioner",
    "price":20,
    "in_stock": true,
    "id":3,
  },{
    "name":"Comb",
    "price":3,
    "in_stock": false,
    "id":4,
  }]

  let initialBasket = {
    1:5
  }

  let initialCodes = [{
    "code": "CodeClan15",
    "discount": 0.15
  }]

  const [itemList, setItemList] = useState(initialItems)
  const [basket, setBasket] = useState(initialBasket)
  const [discountCodes, setDiscountCodes] = useState(initialCodes)

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home itemList={itemList} basket={basket} setBasket={setBasket} />} />
        <Route path="/checkout" element={< Checkout itemList={itemList} basket={basket} setBasket={setBasket} discountCodes={discountCodes} />} />
      </Routes>
    </Router>
  );
}

export default App;
