import React from "react";

import Header from "../../Header/Header";

import classes from "./Jumbotron.module.css"

const Jumbotron = (props) => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h3>...because our products just make scents</h3>
            </div>
        </div>
    );
}

export default Jumbotron;