import React, {useEffect} from "react";
import {connect} from "react-redux";

import Realm from "./Realm/Realm";
import Spinner from "../../UI/Spinner/Spinner"

import classes from "./RealmSelector.module.css";
import * as actions from "../../../store/actions/index";

const RealmSelector = (props) => {
    useEffect(() => {
        props.onFetchRealms();
    }, [props.onFetchRealms]);

    let content = <Spinner />;

    if (!props.loading) {
        content = props.realms.map(realm => (
            <Realm 
                key={realm.id}
                name={realm.name}
                img={null}
                onClick={() => props.onClick(realm.id)} />
        ));
    }

    return (
        <div className={classes.RealmSelector}>
            <h1>choose wisely...</h1>
            <div className={classes.Selections}>
                {content}
            </div>
            <p onClick={props.onClick}>... just show me some candles, please</p>
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
        onFetchRealms: () => dispatch(actions.fetchRealms())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RealmSelector);