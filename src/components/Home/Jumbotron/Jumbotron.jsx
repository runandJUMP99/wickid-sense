import React from "react";

import Header from "../../Header/Header";

import classes from "./Jumbotron.module.css"

const Jumbotron = (props) => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h3>Our products just make scents</h3>
                <button onClick={() => props.onClick("redirect")}>Start Shopping</button>
            </div>
        </div>
    );
}

export default Jumbotron;