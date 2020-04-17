import React from "react";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.Header}>
            <ul>
                <li>home</li>
                <li>products</li>
                <li>shop our wares</li>
            </ul>
        </div>
    );
}

export default Header;