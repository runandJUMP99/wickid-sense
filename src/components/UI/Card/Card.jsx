import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div onClick={props.onClick} className={classes.Card}>
            <img src={props.img} alt={props.name}/>
            <div className={classes.CardBottom}>
                <div className={classes.CardName}>
                    <h3>{props.name}</h3>
                    <p>{props.realmName}</p>
                </div>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default Card;