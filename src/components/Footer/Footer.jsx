import React from "react";

import Newsletter from "./Newsletter/Newsletter";

import classes from "./Footer.module.css";

const Footer = () => {
    return(
        <div className={classes.Footer}>
            <Newsletter />
            <ul>
                <li>products</li>
                <li>contact us</li>
            </ul>
        </div>
    )
}

export default Footer;