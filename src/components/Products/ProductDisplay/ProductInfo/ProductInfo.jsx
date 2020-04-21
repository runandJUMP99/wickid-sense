import React from "react";

import classes from "./ProductInfo.module.css";

const ProductInfo = (props) => {
    return (
        <div style={{
            opacity: props.transition ? 1 : 0
        }} className={classes.ProductInfo}>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default ProductInfo;