import React from "react";

import Card from "../../UI/Card/Card";

import classes from "./ProductSelector.module.css";
import Spike from "../../../assets/images/spike.png";
import SleepyGrape from "../../../assets/images/sleepygrape.png";

const ProductSelector = (props) => {
    return (
        <div className={classes.ProductSelector}>
            <Card 
                name="zoras's wave"
                img={Spike}
                price="9.99"
                onClick={() => props.handleClick("zoraswave")} />
            <Card 
                name="peachy peach"
                img={SleepyGrape}
                price="9.99"
                onClick={() => props.handleClick("peachypeach")} />
            <Card 
                name="dragon leather"
                img={Spike}
                price="9.99"
                onClick={() => props.handleClick("dragonleather")} />
            <Card 
                name="nice cream"
                img={SleepyGrape}
                price="9.99"
                onClick={() => props.handleClick("nicecream")} />
        </div>
    );
}

export default ProductSelector;