import React, {useEffect, useState} from "react";
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

import classes from "./Layout.module.css";
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
    const [visible, setVisible] = useState(false);


    // SECTION FOR HANDLING FIXED NAVBAR

    
    useEffect(() => {
        if (content.type.displayName === "Connect(Product)") {
            setVisible(true);
        } else {
            setVisible(false);
            window.addEventListener("scroll", handleScroll);
        }
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [content]);

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos > 475;
        setVisible(visible);
    };

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
                }, 500);
            }
        }
    }

    function handleChange(selection) {
        if (selection === "home") {
            setContent(<Home 
                onClick={toggleModal}
                onChange={handleChange}
                onFavoriteSelection={handleChange} />
            );
            toggleModal("home");
        }
        else {
            props.onFetchCandles(selection);
            setContent(<Products />);
            
            if (!modal.showModal) {
                toggleModal();
            }
        }
    }

    let headerStyle;

    if (window.innerWidth > 655 && !visible) {
        headerStyle = {backgroundColor: "#313131", transform: "translateY(-7rem)"};
    } else {
        headerStyle = null;
    }

    return (
        <div className={classes.Layout}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal} onClick={toggleModal}>
                {modalContent}
            </Modal>
            <SideDrawer 
                show={modal.showSideDrawer} 
                onClick={toggleModal} 
                onChange={() => handleChange("home")} />
            <div className={classes.Header} style={headerStyle}>
                <Header onClick={toggleModal} onChange={() => handleChange("home")}/>
            </div>
            <Header onClick={toggleModal} onChange={() => handleChange("home")} />
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