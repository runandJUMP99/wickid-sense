import React, { useState } from "react";

import CTASection from "../CTASection/CTASection";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductSelector from "./ProductSelector/ProductSelector";

import classes from "./Products.module.css"

const Product = (props) => {
    const [selectedImg, setSelectedImg] = useState({
        name: "products1",
        price: "$9.99",
        info: "ride the wave of this bossa nova. this candle will make you feel as calm and tranquil like a zora swimming downstream"
    });

    const [fade, setFade] = useState(false);

    const handleClick = (selectedCard) => {
        setFade(true);

        setTimeout(() => {
            switch (selectedCard) {
                case "zoraswave":
                    setSelectedImg({
                        name: "products1",
                        price: "$9.99",
                        info: "ride the wave of this bossa nova. this candle will make you feel as calm and tranquil like a zora swimming downstream."
                    })           
                    break;
                case "peachypeach":
                    setSelectedImg({
                        name: "peachy peach",
                        price: "$10.99",
                        info: "find out why mario can't help but rescue his peach."
                    })  
                    break;
                case "dragonleather":
                    setSelectedImg({
                        name: "dragon leather",
                        price: "$10.99",
                        info: "they say dragons once roamed these lands. this scent will help awaken your inner dragon rider."
                    })  
                    break;
                case "nicecream":
                    setSelectedImg({
                        name: "nice cream",
                        price: "$9.99",
                        info: "nice cream! the frozen treat that's nice to eat!"
                    })  
                    break;
                default:
                    setSelectedImg({
                        name: "products1",
                        price: "$9.99",
                        info: "ride the wave of this bossa nova. this candle will make you feel as calm and tranquil like a zora swimming downstream"
                    })  
                    break;
            }
        }, 1000);

        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    return (
        <div className={classes.ProductDisplay}>
            <div className={classes.ProductDisplayTop}>
                <ProductDisplay
                    name={selectedImg.name}
                    fade={fade}/>
                <ProductInfo 
                    name={selectedImg.name}
                    price={selectedImg.price}
                    info={selectedImg.info}
                    fade={fade}/>   
            </div>
            <ProductSelector handleClick={handleClick}/>
            <CTASection onClick={props.onClick}/>
        </div>
    );
}

export default Product;