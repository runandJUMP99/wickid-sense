import React from "react";

import classes from "./Carousel.module.css";

const Carousel = (props) => {
    return (
        <div className={classes.Carousel}>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{height: "100%"}}>
                <div className="carousel-inner" style={{height: "100%"}}>
                    <div className="carousel-item active" style={{position: "relative"}}>
                        <h4 style={props.firstSlide.style.header}>{props.firstSlide.header}</h4>
                        <p style={props.firstSlide.style.comment}>{props.firstSlide.comment}</p>
                        <img style={props.firstSlide.style.img} src={props.firstSlide.img} className="d-block" alt={props.firstSlide.alt} />
                    </div>
                    <div className="carousel-item" style={{position: "relative"}}>
                        <h4 style={props.secondSlide.style.header}>{props.secondSlide.header}</h4>
                        <p style={props.secondSlide.style.comment}>{props.secondSlide.comment}</p>
                        <img style={props.secondSlide.style.img} src={props.secondSlide.img} className="d-block" alt={props.secondSlide.alt} />
                    </div>
                    <div className="carousel-item" style={{position: "relative"}}>
                        <h4 style={props.thirdSlide.style.header}>{props.thirdSlide.header}</h4>
                        <p style={props.thirdSlide.style.comment}>{props.thirdSlide.comment}</p>
                        <img style={props.thirdSlide.style.img} src={props.thirdSlide.img} className="d-block" alt={props.thirdSlide.alt} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;