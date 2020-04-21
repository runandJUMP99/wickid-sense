import React, { useState } from "react";
import { Route } from "react-router";

import Backdrop from "./UI/Backdrop/Backdrop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Modal from "./UI/Modal/Modal";
import Products from "./Products/Products";
import SideDrawer from "./UI/SideDrawer/SideDrawer";

const Layout = () => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
        showSideDrawer: false
    });

    function toggleModal() {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                // showModal: !prevValue.showModal,
                showSideDrawer: !prevValue.showSideDrawer
            };
        });
    }

    return (
        <div>
            <Backdrop show={modal.showSideDrawer} onClick={toggleModal}/>
            <Modal show={modal.showModal} onClick={toggleModal}/>
            <SideDrawer show={modal.showSideDrawer} onClick={toggleModal} />
            <Header onClick={toggleModal}/>
            <Route path="/" exact component={Home}/>
            <Route path="/products" component={Products}/>
            <Footer />
        </div>
    );
}

export default Layout;