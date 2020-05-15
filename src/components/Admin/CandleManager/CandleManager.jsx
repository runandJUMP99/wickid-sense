import React, { useState} from "react";
import axios from "../../../axios";

import Backdrop from "../../UI/Backdrop/Backdrop";
import Button from "../../UI/Button/Button";
import Candle from "./CandleEditor/Candle/Candle";
import CandleEditor from "./CandleEditor/CandleEditor";
import CandleEditorForm from "./CandleEditor/CandleEditorForm/CandleEditorForm";
import Modal from "../../UI/Modal/Modal";
import RealmEditorForm from "./RealmEditor/RealmEditorForm/RealmEditorForm";
import RealmEditor from "./RealmEditor/RealmEditor";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./CandleManager.module.css";

const CandleManager = () => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    const [modalContent, setModalContent] = useState();

    function toggleModal(event, content) {
        console.log(event);
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });

        if (content === "realm") {
            setModalContent(<RealmEditorForm onClick={toggleModal}/>);
        } else if (content ==="candle") {
            setModalContent(<CandleEditorForm onClick={toggleModal} />);
        }  
    }

    const [candles, setCandles] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleChange(realm) {
        setLoading(true);

        switch (realm) {
            case 0:
                axios.get("/realms.json")
                    .then(res => {
                        setLoading(false);

                        const fetchedRealms = [];

                        for (let key in res.data) {
                            fetchedRealms.push({
                                ...res.data[key],
                                id: key
                            });
                        }

                        console.log(fetchedRealms);
                        
                        const fetchedCandles = [];

                        for (let key in res.data) {
                            fetchedCandles.push({
                                ...res.data[key],
                                id: key
                            });
                        }

                        const updatedCandles = fetchedCandles.map(candle => {
                            return (<Candle
                                key={candle.id}
                                description={candle.description}
                                name={candle.name}
                                price={candle.price}
                                onClick={(event) => toggleModal(event, "candle")} />
                            );
                        });
                        
                        setCandles(updatedCandles);
                    })
                    .catch(error => {
                        setLoading(false);
                    });
                break;
            case 1:
                return (
                    setTimeout(() => {
                        setCandles(
                            <Candle
                                key="0"
                                description="i am a candle"
                                name="candle"
                                price="price"
                                onClick={(event) => toggleModal(event, "candle")} />
                        );
                        setLoading(false);
                    }, 1000)
                );
                break;
            case 2:
                return (
                    setTimeout(() => {
                        setCandles(
                            <Candle
                                key="1"
                                description="i am also a candle"
                                name="also a candle"
                                price="also a price"
                                onClick={(event) => toggleModal(event, "candle")} />
                        );
                        setLoading(false);
                    }, 1000)
                );
                break;
            default:
                setCandles([]);
                break;
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

    let content;

    if (loading) {
        content = (
            <div style={{
                background: "#edffea",
                borderRadius: "8px",
                boxShadow: "0 1px 2px 1px rgba(0, 0, 0, 0.5)",
                margin: "auto",
                padding: "1rem",
                width: "325px"
            }}>
                <Spinner />
            </div>
        );
    } else {
        content = candles;
    }

    return (
        <div className={classes.CandleManager}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal}>
                {modalContent}
            </Modal>
            <h1>assistant regional candle manager</h1>
            <RealmEditor onChange={handleChange} onClick={(event) => toggleModal(event, "realm")}/>
            <CandleEditor onClick={() => toggleModal("candle")}>
                {content}
            </CandleEditor>
            <Button clicked={() => toggleModal("candle")} btnType="Success">Add Candle</Button>
        </div>
    );
}

export default CandleManager;

