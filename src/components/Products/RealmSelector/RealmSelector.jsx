import React, {useEffect} from "react";
import {connect} from "react-redux";

import Realm from "../../UI/Realm/Realm";
import GlobalLoader from "../../UI/GlobalLoader/GlobalLoader"

import classes from "./RealmSelector.module.css";
import * as actions from "../../../store/actions/index";

const RealmSelector = (props) => {
    useEffect(() => {
        props.onFetchRealms();
        props.onSetCandleId(null);
    }, [props.onFetchRealms, props.onSetCandleId]);

    let content = (
        <div style={{height: "15rem"}}>
            <GlobalLoader />
        </div>
    );

    if (!props.loading) {
        content = props.realms.map(realm => (
            <Realm 
                key={realm.id}
                name={realm.name}
                img={realm.img}
                onClick={() => props.onClick(realm.id)} />
        ));
    }

    return (
        <div className={classes.RealmSelector}>
            <h1>Choose Wisely...</h1>
            <div className={classes.Selections}>
                {content}
            </div>
            <p onClick={() => props.onClick(null)}>... just show me some candles, please</p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.realms.loading,
        realms: state.realms.realms
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRealms: () => dispatch(actions.fetchRealms()),
        onSetCandleId: (candleId) => dispatch(actions.setCandleId(candleId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RealmSelector);