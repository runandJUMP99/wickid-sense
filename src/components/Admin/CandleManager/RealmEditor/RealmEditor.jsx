import React from "react";

import Realm from "./Realm/Realm";

import classes from "./RealmEditor.module.css";
import forrest from "../../../../assets/images/sand-walrus.png";

const RealmEditor = (props) => {
    return (
        <div className={classes.RealmEditorSelector}>
            <div>
                <Realm
                    name="forrest of enchantment"
                    img={forrest}
                    onChange={() => props.onChange("first")}/>
                <p onClick={props.onClick}>edit</p>
            </div>
            <div>
                <Realm
                    name="forrest of enchantment"
                    img={forrest}
                    onChange={() => props.onChange("second")}/>
                <p onClick={props.onClick}>edit</p>
            </div>
            <div>
                <Realm
                    name="forrest of enchantment"
                    img={forrest}
                    onChange={() => props.onChange("third")}/>   
                <p onClick={props.onClick}>edit</p>
            </div>
        </div>
    );
}

export default RealmEditor;