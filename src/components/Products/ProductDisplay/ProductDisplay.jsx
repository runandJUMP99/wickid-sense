import React from "react";

import classes from "./ProductDisplay.module.css";

const ProductDisplay = (props) => {
    return (
        <div className={classes.ProductContainer}>
            <img style={{
            opacity: props.fade ? 0 : 1
        }} src={props.img} alt={props.name} />
        </div>
    );
}

export default ProductDisplay;