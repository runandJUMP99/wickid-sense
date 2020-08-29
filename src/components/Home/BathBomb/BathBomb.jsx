import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./BathBomb.module.css";

const BathBomb = () => {
    return (
        <div className={classes.BathBomb}>
            <Fade bottom>
                <div className={classes.Text}>
                    <h2>Explosive Results!</h2>
                    <p>Our Bath Bombs can tame even the largests of beasts. Combine this with one of our candles to truly relax after a long day.</p>
                </div>
            </Fade>
        </div>
    );
}

export default BathBomb;