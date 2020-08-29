import React from "react";

import Carousel from "../../UI/Carousel/Carousel";
import Slide from "react-reveal/Slide";

import classes from "./Testimonials.module.css"

const Testimonials = () => {
    return (
        <div className={classes.Testimonials}>
            <h2>Messages From Afar</h2>
            <Slide right>
                <Carousel />
            </Slide>
        </div>
    );
}

export default Testimonials;