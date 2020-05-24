import React from "react";

import CandleDelete from "./CandleDelete/CandleDelete";
import CandleImg from "./CandleImg/CandleImg";

import classes from "./Candle.module.css";

const Candle = (props) => {
    return (
        <div>
            <div  onClick={props.onEdit} className={classes.Candle}>
                <CandleImg />
                <div className={classes.Info}>
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
                    <p>{props.description.slice(0, 15)} ...</p>
                </div>
            </div>
            <CandleDelete onDelete={props.onDelete} />
        </div>
    );
}

export default Candle;