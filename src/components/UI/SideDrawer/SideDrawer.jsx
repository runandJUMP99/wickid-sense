import React from "react";

import CTAButton from "../../CTAButton/CTAButton";
import NavigationLinks from "../../Header/NavigationLinks/NavigationLinks";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer} style={{
            transform: props.show ? "translateX(0)" : "translateX(-100%)",
        }}>
            <nav>
                <NavigationLinks onClick={props.onClick} onChange={props.onChange}/>
            </nav>
            <div className={classes.CTAButton}>
                <CTAButton onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default SideDrawer;