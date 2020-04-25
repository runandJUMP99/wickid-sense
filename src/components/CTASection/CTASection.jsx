import React from "react";

import CTAButton from "../CTAButton/CTAButton";

import classes from "./CTASection.module.css";

const CTASection = () => {
    return (
        <div className={classes.CTASection}>
            <h1>make haste! shop now!!</h1>
            <CTAButton />
        </div>
    );
}

export default CTASection;