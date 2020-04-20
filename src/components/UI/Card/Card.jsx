import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div onClick={props.handleClick} className={classes.Card}>
            <h3>{props.name}</h3>
            <img src={props.img} alt={props.name}/>
            <p>{props.price}</p>
        </div>
    )
}

export default Card;