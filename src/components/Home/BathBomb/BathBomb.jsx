import React from "react";

import classes from "./BathBomb.module.css";

const BathBomb = () => {
    return (
        <div className={classes.BathBomb}>
            <div className={classes.Text}>
                <h2>Explosive Results!</h2>
                <p>Our Bath Bombs can tame even the largests of beasts. Combine this with one of our candles to truly relax after a long day.</p>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/08/01/00/19/bath-2562225_960_720.jpg" alt="Bath Bomb"/>
        </div>
    );
}

export default BathBomb;