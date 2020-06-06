import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import Backdrop from "../../../UI/Backdrop/Backdrop";
import Button from "../../../UI/Button/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteMessage from "../../DeleteMessage/DeleteMessage";
import EditIcon from '@material-ui/icons/Edit';
import Modal from "../../../UI/Modal/Modal";
import Realm from "../../../UI/Realm/Realm";
import RealmEditorForm from "./RealmEditorForm/RealmEditorForm";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./RealmEditor.module.css";
import * as actions from "../../../../store/actions/index";

const RealmEditor = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    const [modalContent, setModalContent] = useState();

    function toggleModal(selection, realmId) {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });

        if (selection === "edit") {
            setModalContent(<RealmEditorForm onClick={toggleModal}/>);
        } else if (selection === "delete") {
            setModalContent(<DeleteMessage selection="realm" onClick={toggleModal}/>);
        }

        if (!modal.showBackdrop && realmId) {
            props.onSetRealmId(realmId);
        } else {
            setTimeout(() => {
                props.onSetRealmId(null);
            }, 500);
        }
    }

    useEffect(() => {
        props.onFetchRealms();
    }, [props.onFetchRealms]);

    let content = <Spinner />;

    if (!props.loading) {
        content = props.realms.map(realm => (
            <div key={realm.id}>
                <Realm 
                    name={realm.name} 
                    img={realm.img}
                    onClick={() => props.onFetchCandles(realm.id)} />
                <div className={classes.Icons}>
                    <EditIcon onClick={() => toggleModal("edit", realm.id)}/>
                </div>
                <div className={classes.Icons} >
                    <DeleteIcon onClick={() => toggleModal("delete", realm.id)}/>
                </div>
            </div>
        ));
    }
    
    return (
        <div className={classes.RealmEditor}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal}>
                {modalContent}
            </Modal>
            {!props.loading && <h1>assistant regional candle manager</h1>}
            <div className={classes.Realms}>
                {content}
            </div>
            <Button clicked={() => toggleModal("edit", null)} btnType="Success">Add Realm</Button>
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