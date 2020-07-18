import React from "react";

import CTAButton from "../CTAButton/CTAButton";

import classes from "./CTASection.module.css";

const CTASection = (props) => {
    return (
        <div className={classes.CTASection}>
            <h1>Make haste, shop now!</h1>
            <CTAButton onClick={props.onClick} />
        </div>
    );
}

export default CTASection;