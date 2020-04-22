import React from "react";

import CTAButton from "../CTAButton/CTAButton";
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
            <div className={classes.CTAButton}>
                <CTAButton />
            </div>
        </div>
    );
}

export default Header;