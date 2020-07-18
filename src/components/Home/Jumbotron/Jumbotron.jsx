import React from "react";

import Header from "../../Header/Header";

import classes from "./Jumbotron.module.css"

const Jumbotron = (props) => {
    return (
        <div className={classes.Jumbotron}>
            <h3>...because our products just make scents</h3>
        </div>
    );
}

export default Jumbotron;