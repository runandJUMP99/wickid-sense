import React from "react";
import { NavLink } from "react-router-dom";

import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.Header}>
            <ToggleButton />
            <ul>
                <NavLink to="/"><li>home</li></NavLink> 
                <NavLink to="/products"><li>products</li></NavLink>
                <NavLink to="/"><li>shop our wares</li></NavLink>
            </ul>
        </div>
    );
}

export default Header;