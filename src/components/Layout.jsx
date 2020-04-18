import React from "react";
import { Route } from "react-router";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Products from "./Products/Products";

const Layout = () => {
    return (
        <div>
            <Header />
            <Route path="/" exact component={Home}/>
            <Route path="/products" component={Products}/>
            <Footer />
        </div>
    );
}

export default Layout;