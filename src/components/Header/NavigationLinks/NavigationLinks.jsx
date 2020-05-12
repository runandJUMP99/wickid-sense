import React from "react";

import classes from "./NavigationLinks.module.css";

const NavigationLinks = (props) => {
    return (
        <div className={classes.NavigationLinks}>
            <ul>
                <li onClick={props.onChange}>home</li>
                <li onClick={() => props.onClick("products")}>products</li>
            </ul>
        </div>
    )
}

export default NavigationLinks;