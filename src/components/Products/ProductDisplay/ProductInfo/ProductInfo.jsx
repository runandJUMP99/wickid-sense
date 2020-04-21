import React from "react";

import classes from "./ProductInfo.module.css";

const ProductInfo = (props) => {
    return (
        <div style={{
            opacity: props.fade ? 0 : 1
        }} className={classes.ProductInfo}>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default ProductInfo;