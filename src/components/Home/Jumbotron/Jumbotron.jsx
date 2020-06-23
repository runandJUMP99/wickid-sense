import React from "react";

import Header from "../../Header/Header";

import classes from "./Jumbotron.module.css"

const Jumbotron = (props) => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Header}>
                <Header onClick={props.onClick} onChange={() => props.onChange}/>
            </div>
            <div className={classes.Text}>
                <h1>Wickid Sense</h1>
                <h3>...because our candles just make scents</h3>
            </div>
        </div>
    );
}

export default Jumbotron;