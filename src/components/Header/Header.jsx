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
                <NavigationLinks onClick={props.onClick} onChange={props.onChange}/>
            </nav>
            <div className={classes.CTAButton}>
                <CTAButton onClick={props.onClick}/>
            </div>
        </div>
    );
}

export default Header;