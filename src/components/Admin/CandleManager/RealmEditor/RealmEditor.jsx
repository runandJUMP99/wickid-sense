import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import Button from "../../../UI/Button/Button";
import Realm from "../../../Products/RealmSelector/Realm/Realm";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./RealmEditor.module.css";
import * as actions from "../../../../store/actions/index";

const RealmEditor = (props) => {
    useEffect(() => {
        props.onFetchRealms();
    }, []);

    let content = <Spinner />;

    if (!props.loading) {
        content = props.realms.map(realm => (
            <React.Fragment>
                <Realm 
                    key={realm.id}
                    name={realm.name} 
                    onClick={() => props.onChange(0)} />
                <p onClick={props.onClick}>edit</p>
            </React.Fragment>
        ));
    }
    
    return (
        <div className={classes.RealmEditor}>
            {content}
            <Button clicked={() => props.onClick("realm")} btnType="Success">Add Realm</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RealmEditor);