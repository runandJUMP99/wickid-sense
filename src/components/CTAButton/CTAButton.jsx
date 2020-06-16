import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = (props) => {
    return (
        <div onClick={() => props.onClick("redirect")} className={classes.CTAButton}>
            <img src="https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2FwickidCloud.svg?alt=media&token=6d263bdd-9a22-46c6-acd3-d59c26d0cf2f" alt="wickid-cloud"/>
        </div>
    )
}

export default CTAButton;