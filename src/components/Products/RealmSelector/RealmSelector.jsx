import React from "react";

import Selection from "./Selections/Selections";

import classes from "./RealmSelector.module.css";
import forrest from "../../../assets/images/sand-walrus.png"
import cavern from "../../../assets/images/spike.png"
import awakening from "../../../assets/images/sleepygrape.png"

const RealmSelector = () => {
    return (
        <div className={classes.RealmSelector}>
            <div className={classes.Selections}>
                <Selection 
                name="forrest of enchantment"
                img={forrest}/>
                <Selection 
                name="scorched cavern"
                img={cavern}/>
                <Selection 
                name="pools of awakening"
                img={awakening}/>
                <p>... just show me some candles, please</p>
            </div>
        </div>
    );
}

export default RealmSelector;