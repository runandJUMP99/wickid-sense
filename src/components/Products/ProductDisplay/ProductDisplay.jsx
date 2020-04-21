import React, { useState } from "react";

import ProductContainer from "./ProductContainer/ProductContainer";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductSelector from "./ProductSelector/ProductSelector";

import classes from "./ProductDisplay.module.css"

const ProductDisplay = () => {
    const [selectedImg, setSelectedImg] = useState({
        name: "spike",
        price: "$9.99",
        info: "ride the wave of this bossa nova. this candle will make you feel as calm and tranquil like a zora swimming downstream"
    });

    const [transition, setTransition] = useState({transition: false})

    const handleClick = (selectedCard) => {
        setTransition({transition: true});

        setTimeout(() => {
            switch (selectedCard) {
                case "spike":
                    setSelectedImg({
                        name: "spike",
                        price: "$9.99",
                        info: "ride the wave of this bossa nova. this candle will make you feel as calm and tranquil like a zora swimming downstream"
                    })           
                    break;
                case "sleepygrape":
                    setSelectedImg({
                        name: "sleepygrape",
                        price: "$10.99",
                        info: "imma sleepy grape. enjoy sleepy grape. eat more sleepy grapde. become sleepy grape"
                    })  
                    break;
                default:
                    setSelectedImg({
                        name: "spike",
                        price: "$9.99",
                        info: "ride the wave of this bossa nova. this candle will make you feel as calm and tranquil like a zora swimming downstream"
                    })  
                    break;
            }
        }, 500);

        setTimeout(() => {
            setTransition({transition: false});
        }, 500)
    }

    return (
        <div className={classes.ProductDisplay}>
            <ProductContainer name={selectedImg.name}/>
            <ProductInfo 
            name={selectedImg.name}
            price={selectedImg.price}
            info={selectedImg.info}
            transition={transition}/>
            <ProductSelector handleClick={handleClick}/>
        </div>
    );
}

export default ProductDisplay;