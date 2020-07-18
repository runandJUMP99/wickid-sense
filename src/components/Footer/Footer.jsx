import React from "react";

import Newsletter from "./Newsletter/Newsletter";

import classes from "./Footer.module.css";

const Footer = (props) => {
    return(
        <div className={classes.Footer}>
            <Newsletter />
            <ul>
                <li className={classes.Links} onClick={() => props.onClick("products")}>Products</li>
                <a className={classes.Links} href="mailto:wickidsense@gmail.com">Contact Us</a>
            </ul>
        </div>
    )
}

export default Footer;