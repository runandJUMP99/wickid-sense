import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Selection.module.css";

const Selection = (props) => {
    return (
        <div onClick={props.onClick}className={classes.Selection}>
            <NavLink to="/products">
                <img className={classes.Img} src={props.img} alt={props.name}/>
                <div className={classes.Gradient}></div>
                <h3>{props.name}</h3>
            </NavLink>
        </div>
    );
}

export default Selection;