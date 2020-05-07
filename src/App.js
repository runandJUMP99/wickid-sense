import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import CandleManager from "./components/Admin/CandleManager/CandleManager";
import Layout from "./components/Layout";
import Products from "./components/Products/Products";
import Products1 from "./components/Products/Products1";

import './App.css';
import "./index.css";

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Layout} />
        <Route path="/products" exact component={Products}/>
        <Route path="/products1" component={Products1}/>
        <Route path="/admin" component={Admin} />
        <Route path="/candlemanager" component={CandleManager} />
    </BrowserRouter>
  );
}

export default App;
