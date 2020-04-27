import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationLinks.module.css";

const NavigationLinks = (props) => {
    return (
        <div className={classes.NavigationLinks}>
            <ul>
                <li><NavLink onClick={props.onClick} to="/">home</NavLink></li>
                <li onClick={() => props.onClick("products")}>products</li>
            </ul>
        </div>
    )
}

export default NavigationLinks;