import React from "react"

import CandleImg from "./CandleImg/CandleImg";
import DeleteIcon from '@material-ui/icons/Delete';

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
            <div className={classes.Delete}>
                <DeleteIcon />
            </div>
        </div>
    );
}

export default Candle;