import React from "react";

import NavigationLinks from "./NavigationLinks/NavigationLinks";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <div className={classes.Header}>
                <ToggleButton onClick={props.onClick}/>
                <a href="/"><h1 className={classes.Logo} >Wickid Sense</h1></a>
                <nav>
                    <NavigationLinks onClick={props.onClick} onChange={props.onChange}/>
                </nav>
            </div>
        </>
    );
}

export default Header;