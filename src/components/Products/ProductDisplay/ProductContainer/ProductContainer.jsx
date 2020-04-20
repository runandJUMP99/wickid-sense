import React from "react";

import classes from "./ProductContainer.module.css";
import SleepyGrape from "../../../../assets/images/sleepygrape.png";
import Spike from "../../../../assets/images/spike.png";

const ProductContainer = (props) => {
    let selectedImg = Spike;

    if (props.img === "img2") {
        selectedImg = SleepyGrape;
    }

    return (
        <div className={classes.ProductContainer}>
            <img src={selectedImg} alt="selected candle"/>
        </div>
    );
}

export default ProductContainer;