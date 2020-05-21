import React, {useState} from "react";
import {connect} from "react-redux";

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
import * as actions from "../../../store/actions/index";

const CandleManager = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    const [modalContent, setModalContent] = useState();

    function toggleModal(event, content) {
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

    function handleChange(realm) {
        props.onFetchCandles();
    }

    let fetchedCandles;

    if (props.loading) {
        fetchedCandles = (
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
        fetchedCandles = props.candles.map(candle => (
            <Candle
                key={candle.id}
                description={candle.description}
                name={candle.name}
                price={candle.price}
                onDelete={props.onRemoveCandle(candle.id)} />
        ));
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
                {fetchedCandles}
            </CandleEditor>
            <Button clicked={(event) => toggleModal(event, "candle")} btnType="Success">Add Candle</Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCandles: () => dispatch(actions.fetchCandles()),
        onRemoveCandle: (candleId) => dispatch(actions.removeCandle(candleId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandleManager);