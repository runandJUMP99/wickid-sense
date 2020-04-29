import React from "react";

import classes from "./RealmEditorSelector.module.css";

const RealmEditorSelector = (props) => {
    return (
        <div className={classes.RealmEditorSelector}>
            <button onClick={() => props.onClick("firstrealm")}>firstrealm</button>
            <button onClick={() => props.onClick("secondrealm")}>secondrealm</button>
            <button onClick={() => props.onClick("thirdrealm")}>thirdrealm</button>
        </div>);
}

export default RealmEditorSelector;