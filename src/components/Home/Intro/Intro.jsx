import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <Fade bottom>
                <div className={classes.Text}>
                    <h2>Smelted by Our Finest Candlesmiths</h2>
                    <p>We craft and hand pour all of our organic, cruelty free candles with the perfect blend of essential oils and fragrance oils.</p>
                </div>
            </Fade>
        </div>
    );
}

export default Intro;