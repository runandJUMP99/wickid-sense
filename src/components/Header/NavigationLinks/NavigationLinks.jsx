import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationLinks.module.css";

const NavigationLinks = (props) => {
    return (
        <div className={classes.NavigationLinks}>
            <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink onClick={() => props.onClick("products")} to="/">products</NavLink></li>
            </ul>
        </div>
    )
}

export default NavigationLinks;