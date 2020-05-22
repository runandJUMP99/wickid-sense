import React, {useEffect} from "react";
import {connect} from "react-redux";

import Button from "../../../UI/Button/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Realm from "../../../Products/RealmSelector/Realm/Realm";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./RealmEditor.module.css";
import * as actions from "../../../../store/actions/index";

const RealmEditor = (props) => {
    useEffect(() => {
        props.onFetchRealms();
    }, []);
    
    function handleChange(realm) {
        props.onFetchCandles(realm);
    }

    let content = <Spinner />;

    if (!props.loading) {
        content = props.realms.map(realm => (
            <div key={realm.id}>
                <Realm 
                    name={realm.name} 
                    onClick={() => handleChange(realm.id)} />
                <span className={classes.Icons}>
                    <EditIcon onClick={props.onEdit}/>
                </span>
                <span className={classes.Icons} onClick={() => props.onRemoveRealm(props.token, realm.id)}>
                    <DeleteIcon />
                </span>
            </div>
        ));
    }
    
    return (
        <div className={classes.RealmEditor}>
            <div className={classes.Realms}>
                {content}
            </div>
            <Button clicked={() => props.onClick("realm")} btnType="Success">Add Realm</Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.realms.loading,
        realms: state.realms.realms,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCandles: (realm) => dispatch(actions.fetchCandles(realm)),
        onFetchRealms: () => dispatch(actions.fetchRealms()),
        onRemoveRealm: (token, realmId) => dispatch(actions.removeRealm(token, realmId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RealmEditor);