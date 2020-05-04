import React from "react"

import classes from "./Candle.module.css";

const Candle = (props) => {
    return (
        <div  onClick={props.onClick}className={classes.Candle}>
            <div className={classes.Img}>
                img
            </div>
            <div className={classes.Info}>
                <h2>{props.name}</h2>
                <p>Price: $9.99</p>
                <p>Description...</p>
            </div>
        </div>
    );
}

export default Candle;