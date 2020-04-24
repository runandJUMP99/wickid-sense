import React from "react";
import { NavLink } from "react-router-dom";

import Selection from "./Selections/Selections";

import classes from "./RealmSelector.module.css";
import forrest from "../../../assets/images/sand-walrus.png"
import cavern from "../../../assets/images/spike.png"
import awakening from "../../../assets/images/sleepygrape.png"

const RealmSelector = (props) => {
    return (
        <div className={classes.RealmSelector}>
            <h1>choose wisely</h1>
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
            </div>
            <p onClick={props.onClick}><NavLink to="/products">... just show me some candles, please</NavLink></p>
        </div>
    );
}

export default RealmSelector;