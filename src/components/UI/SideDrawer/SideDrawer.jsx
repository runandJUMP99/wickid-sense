import React from "react";

import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
    return (
        <div className={classes.SideDrawer}>
            <nav className="mobile-nav">
                <ul className="mobile-nav__items">
                    <li className="mobile-nav__item">
                        <a href="locations/index.html">Locations</a>
                    </li>
                    <li className="mobile-nav__item">
                        <a href="about-us/index.html">About Us</a>
                    </li>
                    <li className="mobile-nav__item mobile-nav__item--cta">
                        <a href="start-shopping/index.html">Start Shopping!</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer;