import React, { useState } from "react";
import { Route } from "react-router";

import Backdrop from "./UI/Backdrop/Backdrop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Modal from "./UI/Modal/Modal";
import Products from "./Products/Products";
import Products1 from "./Products/Products1";
import RealmSelector from "./Products/RealmSelector/RealmSelector";
import Redirect from "./UI/Redirect/Redirect";
import SideDrawer from "./UI/SideDrawer/SideDrawer";

const Layout = () => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
        showSideDrawer: false
    });

    const [modalContent, setModalContent] = useState();

    function toggleModal(content) {
        if (content === "sidedrawer") {
            setModal({
                showBackdrop: true,
                showModal: false,
                showSideDrawer: true
            });
        } else if (content === "products" || content === "redirect") {
            if (content === "products") {
                setModalContent(<RealmSelector onClick={toggleModal}/>);
            } else if (content === "redirect") {
                setModalContent(<Redirect onClick={toggleModal}/>);
            }
            
            setModal({
                showBackdrop: true,
                showModal: true,
                showSideDrawer: false
            });
        } else {
            setModal({
                showBackdrop: false,
                showModal: false,
                showSideDrawer: false
            });
        }
        var blob = document.getElementById("root");
        blob.scrollIntoView();
    }

    return (
        <div>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal} onClick={toggleModal}>
                {modalContent}
            </Modal>
            <SideDrawer show={modal.showSideDrawer} onClick={toggleModal} />
            <Header onClick={toggleModal}/>
            <Route path="/" exact component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/products1" component={Products1}/>
            <Footer onClick={toggleModal}/>
        </div>
    );
}

export default Layout;