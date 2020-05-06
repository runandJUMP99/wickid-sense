import React, { useState, useEffect } from "react";
import axios from "../../../axios";

import Backdrop from "../../UI/Backdrop/Backdrop";
import Candle from "./CandleEditor/Candle/Candle";
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
            setModalContent(<CandleEditorForm onClick={toggleModal} />);
        }  
    }

    const [candles, setCandles] = useState([]);

    function handleChange(realm) {
        let candles = [];

        switch (realm) {
            case 0:
                candles = [<Candle name="Candle of Immunity" onClick={() => toggleModal("candle")} />,
                    <Candle name="Immunity of Candle" onClick={() => toggleModal("candle")} />,
                    <Candle name="Wisp of Enlightenment" onClick={() => toggleModal("candle")} />,
                    <Candle name="Enlightening Wisp" onClick={() => toggleModal("candle")} />,
                    <Candle name="Carl" onClick={() => toggleModal("candle")} />];
                break;
            case 1:
                candles = [<Candle name="Candle of Immunity0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Immunity of Candle0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Wisp of Enlightenment0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Enlightening Wisp0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Carl0" onClick={() => toggleModal("candle")} />];
                break;
            case 2:
                candles = [<Candle name="Candle of Immunity1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Immunity of Candle1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Wisp of Enlightenment1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Enlightening Wisp1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Carl1" onClick={() => toggleModal("candle")} />];
                break;
            default:
                candles = "changed";
                break;
        }

        setCandles(candles);
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
            <RealmEditor onChange={handleChange} onClick={() => toggleModal("realm")}/>
            <CandleEditor onClick={() => toggleModal("candle")}>
                {candles}
            </CandleEditor>
        </div>
    );
}

export default CandleManager;

