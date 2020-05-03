import React from "react";

import classes from "./CandleEditor.module.css";

const CandleEditor = (props) => {
    return (
        <div onClick={() => props.onClick("candle")} className={classes.CandleEditor}>
            candles
        </div>
    );
}

export default CandleEditor;