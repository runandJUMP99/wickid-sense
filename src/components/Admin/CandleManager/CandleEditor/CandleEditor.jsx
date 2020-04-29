import React from "react";

import classes from "./CandleEditor.module.css";

const CandleEditor = (props) => {
    return (
        <div className={classes.CandleEditor}>
            <img src="" alt="candleImage"/>
            <h3 onClick={props.onClick}>{props.name}</h3>
            <p onClick={props.onClick}>{props.price}</p>
        </div>
    );
}

export default CandleEditor;