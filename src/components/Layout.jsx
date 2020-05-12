import React, { useState } from "react";

import Backdrop from "./UI/Backdrop/Backdrop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Modal from "./UI/Modal/Modal";
import Products from "./Products/Products";
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
                setModalContent(<RealmSelector onClick={() => handleChange("products")}/>);
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
            
            if (content !== "home") {
                setTimeout(() => {
                    setModalContent()
                }, 1000);
            }
        }
        // var blob = document.getElementById("root");
        // blob.scrollIntoView();
    }

    const [content, setContent] = useState(<Home onClick={toggleModal} />);

    function handleChange(selection) {
        if (selection === "products") {
            setContent(<Products />);
            toggleModal();
        }
        else {
            setContent(<Home onClick={toggleModal} />);
            toggleModal("home");
        }
    }

    return (
        <div>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal} onClick={toggleModal}>
                {modalContent}
            </Modal>
            <SideDrawer 
                show={modal.showSideDrawer} 
                onClick={toggleModal} 
                onChange={() => handleChange("home")} />
            <Header onClick={toggleModal} onChange={() => handleChange("home")}/>
            {content}
            <Footer onClick={toggleModal}/>
        </div>
    );
}

export default Layout;