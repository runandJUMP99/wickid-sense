import React, { useState } from "react";
import {connect} from "react-redux";

import Backdrop from "./UI/Backdrop/Backdrop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Modal from "./UI/Modal/Modal";
import Products from "./Products/Products";
import RealmSelector from "./Products/RealmSelector/RealmSelector";
import Redirect from "./UI/Redirect/Redirect";
import SideDrawer from "./UI/SideDrawer/SideDrawer";

import * as actions from "../store/actions/index";

const Layout = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
        showSideDrawer: false
    });
    const [modalContent, setModalContent] = useState();
    const [content, setContent] = useState(<Home 
        onClick={toggleModal} 
        onFavoriteSelection={handleChange} />
    );

    function toggleModal(content) {
        if (content === "sidedrawer") {
            setModal({
                showBackdrop: true,
                showModal: false,
                showSideDrawer: true
            });
        } else if (content === "products" || content === "redirect") {
            if (content === "products") {
                setModalContent(<RealmSelector onClick={handleChange}/>);
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
    }

    function handleChange(selection) {
        if (selection === "home") {
            setContent(<Home 
                onClick={toggleModal}
                onFavoriteSelection={handleChange} />
            );
            toggleModal("home");
        }
        else {
            console.log(selection);
            props.onFetchCandles(selection);
            setContent(<Products />);
            
            if (modal.showBackdrop) {
            toggleModal();
            }
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

const mapDispatchToProps = dispatch => {
    return {
        onFetchCandles: (realm) => dispatch(actions.fetchCandles(realm))
    };
};

export default connect(null, mapDispatchToProps)(Layout);