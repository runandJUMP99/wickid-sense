import React from "react";

import classes from "./Redirect.module.css";

const Redirect = (props) => {
    return (
        <div className={classes.Redirect}>
            <h2>To continue shopping, you will be redirected to another site.</h2>
            <h3>Do you wish to continue?</h3>
            <div className={classes.RedirectActions}>
                <span className={classes.RedirectAction} onClick={props.onClick}>No!</span>
                <a className={classes.RedirectAction} href="/">Yes!</a>
            </div>
        </div>        
    );
}

export default Redirect; 