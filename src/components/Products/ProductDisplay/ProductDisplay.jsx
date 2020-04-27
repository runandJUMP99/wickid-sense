import React from "react";

import classes from "./ProductDisplay.module.css";
import candle1 from "../../../assets/images/candle1.jpg";
import candle2 from "../../../assets/images/candle2.jpg";
import candle3 from "../../../assets/images/candle3.jpg";
import candle4 from "../../../assets/images/candle4.jpg";

const ProductDisplay = (props) => {
    let selectedImg = candle1;

    switch (props.name) {
        case "zora's wave":
            selectedImg = candle1            
            break;
        case "peachy peach":
            selectedImg = candle2
            break;
        case "dragon leather":
            selectedImg = candle3            
            break;
        case "nice cream":
            selectedImg = candle4
            break;    
        default:
            selectedImg = candle1   
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