import React from "react";

import CandleOptions from "./CandleOptions/CandleOptions";
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
            <CandleOptions 
                onDelete={props.onDelete}
                onFavorite={props.onFavorite} />
        </div>
    );
}

export default Candle;