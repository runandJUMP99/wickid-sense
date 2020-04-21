import React from "react";

import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
    return (
        <div className={classes.SideDrawer}>
            <nav className={classes.MobileNav}>
                <ul className={classes.MobileNavItems}>
                    <li className={classes.mobileNavItem}>
                        <a href="locations/index.html">Locations</a>
                    </li>
                    <li className={classes.MobileNavItem}>
                        <a href="about-us/index.html">About Us</a>
                    </li>
                    <li className={classes.MobileNavItem}>
                        <a href="start-shopping/index.html">Start Shopping!</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer;