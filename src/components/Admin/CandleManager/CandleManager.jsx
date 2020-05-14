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

    function toggleModal(content) {
        // console.log(event.target);
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
                axios.get("/realms/realm/candles.json")
                    .then(res => {
                        setLoading(false);
                        
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
                                onClick={() => toggleModal("candle")} />
                            );
                        });
                        
                        setCandles(updatedCandles);
                    })
                    .catch(error => {
                        setLoading(false);
                    });
                break;
            case 1:
                setTimeout(() => {
                    setCandles([<Candle key="0" name="Candle of Immunity0" onClick={() => toggleModal("candle")} />,
                    <Candle key="1" name="Immunity of Candle0" onClick={() => toggleModal("candle")} />,
                    <Candle key="2" name="Wisp of Enlightenment0" onClick={() => toggleModal("candle")} />,
                    <Candle key="3" name="Enlightening Wisp0" onClick={() => toggleModal("candle")} />,
                    <Candle key="4" name="Carl0" onClick={() => toggleModal("candle")} />]);
                    setLoading(false);
                }, 1000);
                break;
            case 2:
                setTimeout(() => {
                    setCandles([<Candle key="0" name="Candle of Immunity1" onClick={() => toggleModal("candle")} />,
                    <Candle key="1" name="Immunity of Candle1" onClick={() => toggleModal("candle")} />,
                    <Candle key="2" name="Wisp of Enlightenment1" onClick={() => toggleModal("candle")} />,
                    <Candle key="3" name="Enlightening Wisp1" onClick={() => toggleModal("candle")} />,
                    <Candle key="4" name="Carl1" onClick={() => toggleModal("candle")} />]);
                    setLoading(false);
                }, 1000);
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
        content = <Spinner />;
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
            <RealmEditor onChange={handleChange} onClick={() => toggleModal("realm")}/>
            <CandleEditor onClick={() => toggleModal("candle")}>
                {content}
            </CandleEditor>
            <Button clicked={() => toggleModal("candle")} btnType="Success">Add Candle</Button>
        </div>
    );
}

export default CandleManager;

