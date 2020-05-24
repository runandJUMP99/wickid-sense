import React, {useState} from "react";

import Backdrop from "../../UI/Backdrop/Backdrop";
import CandleEditor from "./CandleEditor/CandleEditor";
import Modal from "../../UI/Modal/Modal";
import RealmEditorForm from "./RealmEditor/RealmEditorForm/RealmEditorForm";
import RealmEditor from "./RealmEditor/RealmEditor";

import classes from "./CandleManager.module.css";

const CandleManager = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    function toggleModal(content) {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });
    }

    return (
        <div className={classes.CandleManager}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal}>
                <RealmEditorForm onClick={toggleModal}/>
            </Modal>
            <h1>assistant regional candle manager</h1>
            <RealmEditor 
                onAdd={() => toggleModal("realm")} 
                onEdit={() => toggleModal("realm")} />
            <CandleEditor />
        </div>
    );
}

export default CandleManager;