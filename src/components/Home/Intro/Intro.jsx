import React from "react";

import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <img src="https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2Fcandle-335965_1920.jpg?alt=media&token=0b8f9840-fcaf-4639-8f89-4126876c688b" alt="Intro Candle"/>
            <div className={classes.Text}>
                <h2>Smelted by Our Finest Candlesmiths</h2>
                <p>We craft and hand pour all of our organic, cruelty free candles with the perfect blend of essential oils and fragrance oils.</p>
            </div>
        </div>
    );
}

export default Intro;