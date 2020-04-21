import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationLinks.module.css";

const NavigationLinks = (props) => {
    return (
        <div className={classes.NavigationLinks}>
            <ul>
                <NavLink onClick={props.onClick} to="/"><li>home</li></NavLink> 
                <NavLink onClick={props.onClick} to="/products"><li>products</li></NavLink>
                <NavLink className={classes.CTAButton} onClick={props.onClick} to="/"><li>shop our wares</li></NavLink>
            </ul>
        </div>
    )
}

export default NavigationLinks;