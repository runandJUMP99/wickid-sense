import React from "react";

import classes from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-200vh)",
        }} className={classes.Modal}>{props.children}</div>
    );
}

export default Modal;