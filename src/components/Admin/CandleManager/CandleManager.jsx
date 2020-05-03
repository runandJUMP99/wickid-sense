import React, { useState, useEffect } from "react";
import axios from "../../../axios";

import Backdrop from "../../UI/Backdrop/Backdrop";
import CandleEditor from "./CandleEditor/CandleEditor";
import CandleEditorForm from "./CandleEditor/CandleEditorForm/CandleEditorForm";
import Modal from "../../UI/Modal/Modal";
import RealmEditorForm from "./RealmEditor/RealmEditorForm/RealmEditorForm";
import RealmEditor from "./RealmEditor/RealmEditor";

import classes from "./CandleManager.module.css";

const CandleManager = () => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    const [modalContent, setModalContent] = useState();

    function toggleModal(content) {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });

        if (content === "realm") {
            setModalContent(<RealmEditorForm/>);
        } else if (content ==="candle") {
            setModalContent(<CandleEditorForm/>);
        }  
    }

    // useEffect((prevValue) => {
    //     console.log("useEffect start");
    //     axios.get("https://wickid-sense.firebaseio.com/realm/candles.json")
    //         .then( response => {
    //             console.log("axios.then setrealm");
    //             setRealm({
    //                 ...prevValue,
    //                 candles: response.data
    //             });
    //         } )
    //         .catch( error => {
    //             console.log(error);
    //         } );
    // });

    return (
        <div className={classes.CandleManager}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal}>
                {modalContent}
            </Modal>
            <h1>assistant regional candle manager</h1>
            <RealmEditor onClick={toggleModal}/>
            <CandleEditor onClick={toggleModal}/>
        </div>
    );
}

export default CandleManager;