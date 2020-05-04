import React from "react";

import classes from "./CandleEditor.module.css";

const CandleEditor = (props) => {
    return (
        <div className={classes.CandleEditor}>
            {props.children}
        </div>
    );
}

export default CandleEditor;