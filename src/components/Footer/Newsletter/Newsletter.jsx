import React from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

import classes from "./Newsletter.module.css";

const Newsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <h3>Our ravens will send word your way</h3>
            <p>(Sign up for our newsletter, please. Thank you!)</p>
            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </div>
    );
}

export default Newsletter;