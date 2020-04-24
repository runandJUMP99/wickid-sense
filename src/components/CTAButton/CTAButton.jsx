import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = (props) => {
    return (
        <div onClick={() => props.onClick("redirect")} className={classes.CTAButton}>shop our wares</div>
    )
}

export default CTAButton;