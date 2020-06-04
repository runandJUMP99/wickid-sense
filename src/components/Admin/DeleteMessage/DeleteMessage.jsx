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
        props.onRemoveCandle(props.token, props.setCandleId);
        props.onClick();
    }

    function removeRealm() {
        const realmId = props.setRealmId;

        props.realms.forEach(realm => {
            if (realm.id === realmId) {
                props.onRemoveRealm(props.token, realmId)
            }
        });
        
        props.candles.forEach(candle => {
            if (candle.realm === realmId) {
                props.onRemoveCandle(props.token, candle.id)
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
        onRemoveCandle: (token, candleId) => dispatch(actions.removeCandle(token, candleId)),
        onRemoveRealm: (token, realmId) => dispatch(actions.removeRealm(token, realmId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMessage);