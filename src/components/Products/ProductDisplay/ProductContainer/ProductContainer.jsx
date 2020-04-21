import React from "react";

import classes from "./ProductContainer.module.css";
import SleepyGrape from "../../../../assets/images/sleepygrape.png";
import Spike from "../../../../assets/images/spike.png";

const ProductContainer = (props) => {
    let selectedImg = Spike;

    switch (props.name) {
        case "spike":
            selectedImg = Spike            
            break;
        case "sleepygrape":
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

export default ProductContainer;