import React from "react";
import { Route, Link } from "react-router";

import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const Layout = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Layout;