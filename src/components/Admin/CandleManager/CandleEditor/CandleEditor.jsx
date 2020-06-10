import React, {useState} from "react";
import {connect} from "react-redux";

import Backdrop from "../../../UI/Backdrop/Backdrop";
import Button from "../../../UI/Button/Button";
import Candle from "./Candle/Candle";
import CandleEditorForm from "./CandleEditorForm/CandleEditorForm";
import DeleteMessage from "../../DeleteMessage/DeleteMessage";
import Modal from "../../../UI/Modal/Modal";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./CandleEditor.module.css";
import * as actions from "../../../../store/actions/index";


const CandleEditor = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    const [modalContent, setModalContent] = useState();

    function toggleModal(selection, candleId) {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });

        if (selection === "edit") {
            setModalContent(<CandleEditorForm onClick={toggleModal}/>);
        } else if (selection === "delete") {
            setModalContent(<DeleteMessage selection="candle" onClick={toggleModal}/>);
        }

        if (!modal.showBackdrop && candleId) {
            props.onSetCandleId(candleId);
        } else {
            setTimeout(() => {
                props.onSetCandleId(null);
            }, 500);
        }
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
                favorite={candle.favorite}
                img={candle.img}
                name={candle.name}
                price={candle.price}
                onEdit={() => toggleModal("edit", candle.id)}
                onDelete={() => toggleModal("delete", candle.id)}
                onFavorite={() => props.onEditFavoriteCandle(props.token, candle)} />
        ));
    }

    return (
        <React.Fragment>
            <div className={classes.CandleEditor}>
                <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
                <Modal show={modal.showModal}>
                    {modalContent}
                </Modal>
                {fetchedCandles}
            </div>
            <div onClick={() => toggleModal("edit", null)} className={classes.AddCandle}>
                <Button btnType="Success" disabled={props.realms.length === 0}>Add Candle</Button>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading,
        realms: state.realms.realms,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEditFavoriteCandle: (token, candleId) => dispatch(actions.editFavoriteCandle(token, candleId)),
        onSetCandleId: (candleId) => dispatch(actions.setCandleId(candleId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandleEditor);