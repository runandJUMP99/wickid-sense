import React from "react";

import classes from "./ProductDisplay.module.css";
import SleepyGrape from "../../../assets/images/sleepygrape.png";
import Spike from "../../../assets/images/spike.png";

const ProductDisplay = (props) => {
    let selectedImg = Spike;

    switch (props.name) {
        case "peachy peach":
            selectedImg = SleepyGrape            
            break;
        case "nice cream":
            selectedImg = SleepyGrape
            break;
    
        default:
            selectedImg = Spike     
            break;
    }

    return (
        <div className={classes.ProductContainer}>
            <img style={{
            opacity: props.fade ? 0 : 1
        }} src={selectedImg} alt="selected candle"/>
        </div>
    );
}

export default ProductDisplay;