import React from "react";

import Announcement from "./Announcement/Announcement";
import Carousel from "../../UI/Carousel/Carousel";

import classes from "./Jumbotron.module.css"

const Jumbotron = () => {
    const headerStyle = {
        background: "rgba(100, 100, 100, 0.4)",
        color: "white",
        fontSize: "2.5rem",
        marginLeft: "2rem",
        padding: "1rem 0.5rem",
        marginBottom: 0,
        marginTop: "15%",
        position: 'relative',
        width: "40%",
        zIndex: 5   
    }

    const commentStyle = {
        background: "rgba(100, 100, 100, 0.4)",
        color: "white",
        marginLeft: "2rem",
        padding: "1rem 0.5rem",
        position: 'relative',
        width: "40%",
        zIndex: 5   
    }

    const imgStyle = {
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
    };

    const firstSlide = {
        header: "Our Products Just Make Scents",
        comment: "Candles crafted for any occasion.",
        img: "https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2Ftea-lights-2611196_1920.jpg?alt=media&token=8893cb9c-3097-460a-9906-96a64770d680",
        alt: "Tea Candles",
        style: {
            header: headerStyle,
            comment: commentStyle,
            img: imgStyle
        }
    };

    const secondSlide = {
        header: "New Products In Our Holiday Realm",
        comment: "Holiday candles to bring in some holiday cheer!",
        img: "https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2Fchristmas-2926962_1920.jpg?alt=media&token=218cd106-166f-4787-b3fa-0f2542aa4b50",
        alt: "Holiday Candles",
        style: {
            header: headerStyle,
            comment: commentStyle,
            img: imgStyle
        }
    };

    const thirdSlide = {
        header: "Enjoy Our Candles During Any Occasion",
        comment: "Find out why our customers say we have the comfiest candles.",
        img: "https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2Froom-2593422_1920.jpg?alt=media&token=27486205-a18d-4ad7-aa81-ccc09ef670da",
        alt: "Comfy Candles by the Window",
        style: {
            header: headerStyle,
            comment: commentStyle,
            img: imgStyle
        }
    };

    return (
        <div className={classes.Jumbotron}>
            <Announcement />
            <Carousel firstSlide={firstSlide} secondSlide={secondSlide} thirdSlide={thirdSlide} />
        </div>
    );
}

export default Jumbotron;