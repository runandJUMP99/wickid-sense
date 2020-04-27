import React from "react";

import classes from "./Redirect.module.css";

const Redirect = (props) => {
    return (
        <div className={classes.Redirect}>
            <h2>to continue shopping, you will be redirected to another site</h2>
            <h3>do you wish to continue?</h3>
            <div className={classes.RedirectActions}>
                <button className={classes.RedirectAction} onClick={props.onClick} type="button">no!</button>
                <a className={classes.RedirectAction} href="/">yes!</a>
            </div>
        </div>        
    );
}

export default Redirect; 