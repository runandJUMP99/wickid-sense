import React from "react";

import Selection from "./Selections/Selections";

import classes from "./RealmSelector.module.css";
import forrest from "../../../assets/images/sand-walrus.png"
import cavern from "../../../assets/images/spike.png"
import awakening from "../../../assets/images/sleepygrape.png"

const RealmSelector = (props) => {
    return (
        <div className={classes.RealmSelector}>
            <div className={classes.Selections}>
                <Selection 
                    name="forrest of enchantment"
                    img={forrest}
                    onClick={props.onClick}/>
                <Selection 
                    name="scorched cavern"
                    img={cavern}
                    onClick={props.onClick}/>
                <Selection 
                    name="pools of awakening"
                    img={awakening}
                    onClick={props.onClick}/>
                <p onClick={props.onClick}>... just show me some candles, please</p>
            </div>
        </div>
    );
}

export default RealmSelector;