import React from "react";

import Realm from "../../../Products/RealmSelector/Realm/Realm";

import classes from "./RealmEditor.module.css";
import forrest from "../../../../assets/images/sand-walrus.png";

const RealmEditorSelector = (props) => {
    return (
        <div className={classes.RealmEditorSelector}>
            <Realm
                name="forrest of enchantment"
                img={forrest}
                onClick={() => props.onClick("realm")}/>
            <Realm
                name="forrest of enchantment"
                img={forrest}
                onClick={() => props.onClick("realm")}/>
            <Realm
                name="forrest of enchantment"
                img={forrest}
                onClick={() => props.onClick("realm")}/>   
        </div>
    );
}

export default RealmEditorSelector;