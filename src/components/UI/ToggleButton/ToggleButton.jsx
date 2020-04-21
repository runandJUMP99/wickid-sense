import React from "react";

import classes from "./ToggleButton.module.css";

const ToggleButton = () => {
    return(
        <div>
            <button className={classes.ToggleButton}>
                <span className={classes.ToggleButton__bar}></span>
                <span className={classes.ToggleButton__bar}></span>
                <span className={classes.ToggleButton__bar}></span>
            </button>
        </div>
    );
}

export default ToggleButton;