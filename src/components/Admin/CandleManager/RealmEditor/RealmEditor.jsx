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
                    onChange={() => props.onChange(0)}/>
                <p onClick={props.onClick}>edit</p>
            </div>
            <div>
                <Realm
                    name="forrest of enchantment"
                    img={forrest}
                    onChange={() => props.onChange(1)}/>
                <p onClick={props.onClick}>edit</p>
            </div>
            <div>
                <Realm
                    name="forrest of enchantment"
                    img={forrest}
                    onChange={() => props.onChange(2)}/>   
                <p onClick={props.onClick}>edit</p>
            </div>
        </div>
    );
}

export default RealmEditor;