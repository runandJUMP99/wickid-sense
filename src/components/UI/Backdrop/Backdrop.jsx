import React from "react";

import classes from "./Backdrop.module.css";

function Backdrop(props) {
    return <div className={classes.Backdrop} onClick={props.onClick} style={{
                display: props.show ? "block" : "none",
                opacity: props.show ? 1 : 0,
                zIndex: props.show ? 50 : 0
                }}>
            </div>;
}

export default Backdrop;