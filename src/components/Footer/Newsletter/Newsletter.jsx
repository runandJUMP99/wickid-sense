import React from "react";

import classes from "./Newsletter.module.css";

const Newsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <h3>our ravens will send word your way</h3>
            <p>(sign up for our newsletter. thank you.</p>
            <input type="text" placeholder="your email"/>
            <button>sign up</button>
        </div>
    );
}

export default Newsletter;