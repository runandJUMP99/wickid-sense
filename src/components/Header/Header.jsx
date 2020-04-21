import React from "react";

import NavigationLinks from "./NavigationLinks/NavigationLinks";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <ToggleButton onClick={props.onClick}/>
            <nav>
                <NavigationLinks />
            </nav>
        </div>
    );
}

export default Header;