import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <NavLink to="products">
            <div onClick={props.onClick} className={classes.Card}>
                <h3>{props.name}</h3>
                <img src={props.img} alt={props.name}/>
                <p>{props.price}</p>
            </div>
        </NavLink>
    )
}

export default Card;