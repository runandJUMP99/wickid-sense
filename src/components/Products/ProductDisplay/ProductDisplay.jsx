import React from "react";

import classes from "./ProductDisplay.module.css";

const ProductDisplay = (props) => {
    return (
        <div className={classes.Candle}>
            <div className={classes.CandleImg} style={{
                opacity: props.fade ? 0 : 1,
                transform: props.fade ? "translateY(5rem) rotateY(360deg)" : "translateY(0) rotateY(0)"
            }} >
                <img src={props.img} alt={props.name} />
            </div>
            <div className={classes.CandleShadow} style={{
                background: props.fade ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
                boxShadow: props.fade ? "0 0 8px 8px rgba(0, 0, 0, 0.5)" : "0 0 8px 8px rgba(0, 0, 0, 0.2)",
            }}></div>
        </div>
    );
}

export default ProductDisplay;