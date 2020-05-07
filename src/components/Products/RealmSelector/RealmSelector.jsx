import React from "react";

import Realm from "./Realm/Realm";

import classes from "./RealmSelector.module.css";
import forrest from "../../../assets/images/sand-walrus.png"
import cavern from "../../../assets/images/spike.png"
import awakening from "../../../assets/images/sleepygrape.png"

const RealmSelector = (props) => {
    return (
        <div className={classes.RealmSelector}>
            <h1>choose wisely...</h1>
            <div className={classes.Selections}>
                <Realm
                    name="forrest of enchantment"
                    img={forrest}
                    onClick={props.onClick}/>
                <Realm 
                    name="scorched cavern"
                    img={cavern}
                    onClick={props.onClick}/>
                <Realm 
                    name="pools of awakening"
                    img={awakening}
                    onClick={props.onClick}/>
            </div>
            <p onClick={props.onClick}>... just show me some candles, please</p>
        </div>
    );
}

export default RealmSelector;