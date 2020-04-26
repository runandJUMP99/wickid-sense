import React from "react";

import classes from "./Jumbotron.module.css"

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <h1>scents designed to transport you to a far away land</h1>
            <h3>or at least to a less stressful one</h3>
        </div>
    );
}

export default Jumbotron;