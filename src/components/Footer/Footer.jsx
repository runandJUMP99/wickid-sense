import React from "react";

import Newsletter from "./Newsletter/Newsletter";

import classes from "./Footer.module.css";

const Footer = (props) => {
    return(
        <div className={classes.Footer}>
            <Newsletter />
            <ul>
                <li onClick={() => props.onClick("products")}>products</li>
                <li>contact us</li>
            </ul>
        </div>
    )
}

export default Footer;