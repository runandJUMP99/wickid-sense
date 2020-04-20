import React from "react";

import Card from "../../../UI/Card/Card";

import classes from "./ProductSelector.module.css";
import Spike from "../../../../assets/images/spike.png";
import SleepyGrape from "../../../../assets/images/sleepygrape.png";

const ProductSelector = (props) => {
    return (
        <div className={classes.ProductSelector}>
            <Card 
            name="spike"
            img={Spike}
            price="9.99"
            handleClick={props.handleClick} />
            <Card 
            name="sleepygrape"
            img={SleepyGrape}
            price="9.99"/>
        </div>
    );
}

export default ProductSelector;