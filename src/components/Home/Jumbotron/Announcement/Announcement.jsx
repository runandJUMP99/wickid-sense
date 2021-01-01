import React from "react";

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import classes from "./Announcement.module.css";

const Announcement = () => {
    return <p className={classes.Announcement}><span><CardGiftcardIcon /></span>Save 30% on orders more than $50 this Holiday Season!<span><CardGiftcardIcon /></span></p>
}

export default Announcement