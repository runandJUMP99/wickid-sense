import React from "react";

import NavigationLinks from "../../Header/NavigationLinks/NavigationLinks";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer} style={{
            transform: props.show ? "translateX(0)" : "translateX(-100%)",
        }}>
            <nav className={classes.MobileNav}>
                <NavigationLinks onClick={props.onClick}/>
            </nav>
        </div>
    )
}

export default SideDrawer;

{/* <ul className={classes.MobileNavItems}>
                    <li className={classes.MobileNavItem}>
                        <a href="locations/index.html">Locations</a>
                    </li>
                    <li className={classes.MobileNavItem}>
                        <a href="about-us/index.html">About Us</a>
                    </li>
                    <li className={classes.MobileNavItem}>
                        <a href="start-shopping/index.html">Start Shopping!</a>
                    </li>
                </ul> */}