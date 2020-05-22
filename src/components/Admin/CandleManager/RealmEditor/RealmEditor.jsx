import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import Backdrop from "../../../UI/Backdrop/Backdrop";
import Button from "../../../UI/Button/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteMessage from "../../DeleteMessage/DeleteMessage";
import EditIcon from '@material-ui/icons/Edit';
import Modal from "../../../UI/Modal/Modal";
import Realm from "../../../Products/RealmSelector/Realm/Realm";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./RealmEditor.module.css";
import * as actions from "../../../../store/actions/index";

const RealmEditor = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    function toggleModal(realmId) {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });

        props.onSetRealmId(realmId);
    }

    useEffect(() => {
        props.onFetchRealms();
    }, []);

    let content = <Spinner />;

    if (!props.loading) {
        content = props.realms.map(realm => (
            <div key={realm.id}>
                <Realm 
                    name={realm.name} 
                    onClick={() => props.onFetchCandles(realm.id)} />
                <div className={classes.Icons}>
                    <EditIcon onClick={props.onEdit}/>
                </div>
                <div className={classes.Icons} >
                    <DeleteIcon onClick={() => toggleModal(realm.id)}/>
                </div>
            </div>
        ));
    }
    
    return (
        <div className={classes.RealmEditor}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal}>
                <DeleteMessage onClick={toggleModal}/>
            </Modal>
            <div className={classes.Realms}>
                {content}
            </div>
            <Button clicked={() => props.onAdd("realm")} btnType="Success">Add Realm</Button>
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
        onFetchCandles: (realm) => dispatch(actions.fetchCandles(realm)),
        onFetchRealms: () => dispatch(actions.fetchRealms()),
        onSetRealmId: (realmId) => dispatch(actions.setRealmId(realmId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RealmEditor);