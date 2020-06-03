import React from "react";

import classes from "./SliderButton.module.css";

const SliderButton = (props) => {
    return <div className={classes.SliderButton}>{props.children}</div>
}

export default SliderButton;