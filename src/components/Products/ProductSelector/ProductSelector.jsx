import React, { useState } from "react";

import Card from "../../UI/Card/Card";

import classes from "./ProductSelector.module.css";
import candle1 from "../../../assets/images/candle1.jpg";
import candle2 from "../../../assets/images/candle2.jpg";
import candle3 from "../../../assets/images/candle3.jpg";
import candle4 from "../../../assets/images/candle4.jpg";

const ProductSelector = (props) => {
    const [cardContent, setCardContent] = useState(
        <div className={classes.ProductSelector}>
            <Card 
                name="zoras's wave"
                img={candle1}
                price="9.99"
                onClick={() => props.handleClick("zoraswave")} />
            <Card 
                name="peachy peach"
                img={candle2}
                price="9.99"
                onClick={() => props.handleClick("peachypeach")} />
            <Card 
                name="dragon leather"
                img={candle3}
                price="9.99"
                onClick={() => props.handleClick("dragonleather")} />
            <Card 
                name="nice cream"
                img={candle4}
                price="9.99"
                onClick={() => props.handleClick("nicecream")} />
        </div>
    );

    return cardContent;
}

export default ProductSelector;