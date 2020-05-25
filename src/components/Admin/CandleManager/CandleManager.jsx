import React from "react";

import CandleEditor from "./CandleEditor/CandleEditor";
import RealmEditor from "./RealmEditor/RealmEditor";

import classes from "./CandleManager.module.css";

const CandleManager = (props) => {
    return (
        <div className={classes.CandleManager}>
            <h1>assistant regional candle manager</h1>
            <RealmEditor />
            <CandleEditor />
        </div>
    );
}

export default CandleManager;