import React from "react";

import classes from "./Realm.module.css";

const Realm = (props) => {
    return (
    <div onClick={props.onChange} className={classes.Realm}>realm</div>
    );
}

export default Realm;