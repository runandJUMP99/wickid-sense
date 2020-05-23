import React, {useState} from "react";
import {connect} from "react-redux";

import Backdrop from "../../../UI/Backdrop/Backdrop";
import Candle from "./Candle/Candle";
import CandleEditorForm from "./CandleEditorForm/CandleEditorForm";
import Modal from "../../../UI/Modal/Modal";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./CandleEditor.module.css";
import * as actions from "../../../../store/actions/index";


const CandleEditor = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    function toggleModal(candleId) {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });

        props.onSetCandleId(candleId);
    }

    let fetchedCandles = (
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

    if (!props.loading) {
        fetchedCandles = props.candles.map(candle => (
            <Candle
                key={candle.id}
                description={candle.description}
                name={candle.name}
                price={candle.price}
                onDelete={() => props.onRemoveCandle(props.token, candle.id)}
                onEdit={() => toggleModal(candle.id)} />
        ));
    }

    return (
        <div className={classes.CandleEditor}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal}>
                <CandleEditorForm />
            </Modal>
            {fetchedCandles}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCandle: (token, candleId) => dispatch(actions.removeCandle(token, candleId)),
        onSetCandleId: (candleId) => dispatch(actions.setCandleId(candleId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandleEditor);