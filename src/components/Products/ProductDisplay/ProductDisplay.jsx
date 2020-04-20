import React, { useState } from "react";

import ProductContainer from "./ProductContainer/ProductContainer";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductSelector from "./ProductSelector/ProductSelector";

import classes from "./ProductDisplay.module.css"

const ProductDisplay = () => {
    const [selectedImg, setSelectedImg] = useState("img1");

    const handleClick = () => {
        setSelectedImg("img2");
    }

    return (
        <div className={classes.ProductDisplay}>
            <ProductContainer img={selectedImg}/>
            <ProductInfo />
            <ProductSelector handleClick={handleClick}/>
        </div>
    );
}

export default ProductDisplay;