import React, {useState} from "react";

import Backdrop from "../../UI/Backdrop/Backdrop";
import Button from "../../UI/Button/Button";
import CandleEditor from "./CandleEditor/CandleEditor";
import CandleEditorForm from "./CandleEditor/CandleEditorForm/CandleEditorForm";
import Modal from "../../UI/Modal/Modal";
import RealmEditorForm from "./RealmEditor/RealmEditorForm/RealmEditorForm";
import RealmEditor from "./RealmEditor/RealmEditor";

import classes from "./CandleManager.module.css";

const CandleManager = (props) => {
    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false,
    });

    const [modalContent, setModalContent] = useState();

    function toggleModal(event, content) {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            }
        });

        if (content === "realm") {
            setModalContent(<RealmEditorForm onClick={toggleModal}/>);
        } else if (content === "candle") {
            setModalContent(<CandleEditorForm onClick={toggleModal} />);
        }
    }

    return (
        <div className={classes.CandleManager}>
            <Backdrop show={modal.showBackdrop} onClick={toggleModal}/>
            <Modal show={modal.showModal}>
                {modalContent}
            </Modal>
            <h1>assistant regional candle manager</h1>
            <RealmEditor 
                onAdd={() => toggleModal(null, "realm")} 
                onEdit={(event) => toggleModal(event, "realm")} />
            <CandleEditor onClick={() => toggleModal("candle")} />
            <Button clicked={(event) => toggleModal(event, "candle")} btnType="Success">Add Candle</Button>
        </div>
    );
}

export default CandleManager;