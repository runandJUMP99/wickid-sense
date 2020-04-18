import React from "react";

import Carousel from "./Carousel/Carousel";

import classes from "./Testimonials.module.css"

const Testimonials = () => {
    return (
        <div className={classes.Testimonials}>
            <h2>messages from afar</h2>
            <Carousel />
        </div>
    );
}

export default Testimonials;