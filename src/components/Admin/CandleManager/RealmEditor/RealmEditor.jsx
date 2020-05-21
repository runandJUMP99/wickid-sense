import React, {useEffect} from "react";
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
        let i = 0;
        content = props.realms.map(realm => (
            <React.Fragment key={realm.id}>
                <Realm 
                    name={realm.name} 
                    onClick={() => props.onChange(realm.id)} />
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