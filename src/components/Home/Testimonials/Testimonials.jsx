import React from "react";

import Carousel from "../../UI/Carousel/Carousel";
import Slide from "react-reveal/Slide";

import classes from "./Testimonials.module.css"
import spike from "../../../assets/images/spike.png";
import sleepygrape from "../../../assets/images/sleepygrape.png";
import sandwalrus from "../../../assets/images/sand-walrus.png";

const Testimonials = () => {
    //CAROUSEL
    const imgStyle = {
        borderRadius: "50%",
        height: "5rem",
        margin: "auto",
        width: "5rem"
    };
    const firstSlide = {
        header: "Light up a candle and whatever happens, happens",
        comment: "-Spike",
        img: spike,
        alt: "Spike",
        style: {img: imgStyle}
    };

    const secondSlide = {
        header: "ZZZzzzZZZzzz...",
        comment: "-Sleepy Grape",
        img: sleepygrape,
        alt: "Mineta",
        style: {img: imgStyle}
    };

    const thirdSlide = {
        header: "I like sand. and the sand scented candles really helped remind me of home",
        comment: "-Walrus",
        img: sandwalrus,
        alt: "Sand Walrus",
        style: {img: imgStyle}
    };

    return (
        <div className={classes.Testimonials}>
            <h2>Messages From Afar</h2>
            <Slide right>
                <Carousel firstSlide={firstSlide} secondSlide={secondSlide} thirdSlide={thirdSlide} />
            </Slide>
        </div>
    );
}

export default Testimonials;