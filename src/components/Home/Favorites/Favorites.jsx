import React from "react";

import Card from "../../UI/Card/Card";

import classes from "./Favorites.module.css";

const Favorites = () => {
    return (
        <div className={classes.Favorites}>
            <h2>our finest creations</h2>
            <div className={classes.Candles}>
                <Card 
                    name="Zora's Wave"
                    img=""
                    price="$9.99" />
                <Card 
                    name="Peachy Peach"
                    img=""
                    price="$10.99" />
                <Card 
                    name="Dragon Leather"
                    img=""
                    price="$8.99" />
                <Card 
                    name="Nice Cream"
                    img=""
                    price="$7.99" />
            </div>
        </div>
    );
}

export default Favorites;