import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = (props) => {
    return (
        <div onClick={() => props.onClick("redirect")} className={classes.CTAButton}>
            <img src="https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2FwickidCloud.svg?alt=media&token=aedc2c82-4719-4c4b-beba-77629b02e62a" alt="wickid-cloud"/>
            <p>shop our wares</p>
        </div>
    )
}

export default CTAButton;