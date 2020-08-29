import React from "react";

import CTAButton from "../CTAButton/CTAButton";
import Zoom from "react-reveal/Zoom";

import classes from "./CTASection.module.css";

const CTASection = (props) => {
    return (
        <div className={classes.CTASection}>
            <Zoom>
                <h1>Make haste! Shop now!</h1>
                <CTAButton onClick={props.onClick} />
            </Zoom>
        </div>
    );
}

export default CTASection;