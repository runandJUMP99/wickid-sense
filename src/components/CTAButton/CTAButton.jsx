import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = (props) => {
    return (
        <div onClick={() => props.onClick("redirect")} className={classes.CTAButton}>
            <img src="https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2FwickidCloud.svg?alt=media&token=e1db8abe-8caf-4689-89a2-a01406a30951" alt="wickid-cloud"/>
        </div>
    )
}

export default CTAButton;