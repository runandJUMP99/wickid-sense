import React from "react";

import classes from "./Realm.module.css";

const Realm = (props) => {
    return (
        <div onClick={props.onClick} className={classes.Realm}>
            <img className={classes.Img} src={props.img} alt={props.name}/>
            <div className={classes.Gradient}></div>
            <h3>{props.name}</h3>
        </div>
    );
}

export default Realm;