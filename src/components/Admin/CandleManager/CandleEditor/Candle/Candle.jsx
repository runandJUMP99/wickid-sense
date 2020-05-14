import React from "react"

import CandleImg from "./CandleImg/CandleImg";

import classes from "./Candle.module.css";

const Candle = (props) => {
    return (
        <div  onClick={props.onClick} className={classes.Candle}>
            <CandleImg />
            <div className={classes.Info}>
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Candle;