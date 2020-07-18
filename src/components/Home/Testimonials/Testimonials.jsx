import React from "react";

import Carousel from "../../UI/Carousel/Carousel";

import classes from "./Testimonials.module.css"

const Testimonials = () => {
    return (
        <div className={classes.Testimonials}>
            <h2>Messages From Afar</h2>
            <Carousel />
        </div>
    );
}

export default Testimonials;