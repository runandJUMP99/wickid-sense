import React from "react";
import {connect} from "react-redux";

import classes from "./DeleteMessage.module.css";
import * as actions from "../../../store/actions/index";

const DeleteMessage = (props) => {
    let message = "Deleting this realm will also delete all associated candles.";
    let selectedFunction = removeRealm;

    if (props.selection === "candle") {
        message = "Once deleted, the candle data can never be recovered.";
        selectedFunction = removeCandle;
    }

    function removeCandle() {
        props.candles.forEach(candle => {
            if (candle.id === props.setCandleId) {
                props.onRemoveCandle(props.token, candle.id, candle.imgName);
            }
        })

        props.onClick();
    }

    function removeRealm() {
        props.realms.forEach(realm => {
            if (realm.id === props.setRealmId) {
                props.onRemoveRealm(props.token, realm.id, realm.imgName);
            }
        });
        
        props.candles.forEach(candle => {
            if (candle.realm === props.setRealmId) {
                props.onRemoveCandle(props.token, candle.id, candle.imgName);
            }
        });

        props.onClick();
    }

    return (
        <div className={classes.DeleteMessage}>
            <h2>{message}</h2>
            <h3>do you wish to continue?</h3>
            <div className={classes.DeleteMessageActions}>
                <button className={classes.DeleteMessageAction} onClick={selectedFunction}>Delete</button>
                <button className={classes.DeleteMessageAction} onClick={props.onClick} type="button">Cancel</button>
            </div>
        </div>      
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        realms: state.realms.realms,
        setCandleId: state.candles.setCandleId,
        setRealmId: state.realms.setRealmId,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCandle: (token, candleId, imgName) => dispatch(actions.removeCandle(token, candleId, imgName)),
        onRemoveRealm: (token, realmId, imgName) => dispatch(actions.removeRealm(token, realmId, imgName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMessage);