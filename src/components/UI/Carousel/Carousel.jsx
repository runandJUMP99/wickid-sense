import React from "react";

import classes from "./Carousel.module.css";
import spike from "../../../assets/images/spike.png";
import sleepygrape from "../../../assets/images/sleepygrape.png";
import sandwalrus from "../../../assets/images/sand-walrus.png";

const Carousel = () => {
    return (
        <div className={classes.Carousel}>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h4>"light up a candle and whatever happens, happens"</h4>
                        <p>-spike</p>
                        <img src={spike} className="d-block" alt="testimonial" />
                    </div>
                    <div className="carousel-item">
                        <h4>"ZZZzzzZZZzzz..."</h4>
                        <p>-sleepygrape</p>
                        <img src={sleepygrape} className="d-block" alt="testimonial" />
                    </div>
                    <div className="carousel-item">
                        <h4>"i like sand. and the sand scented candles really helped remind me of home"</h4>
                        <p>-walrus</p>
                        <img src={sandwalrus} className="d-block" alt="testimonial" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;