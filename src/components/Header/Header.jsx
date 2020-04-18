import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <ul>
                <li>
                    <NavLink to="/">home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">products</NavLink>
                </li>
                <li>
                    <NavLink to="/">shop our wares</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;