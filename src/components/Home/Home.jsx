import React from "react";

import CTASection from "../CTASection/CTASection";
import Favorites from "./Favorites/Favorites"
import Jumbotron from "./Jumbotron/Jumbotron";
import Testimonials from "./Testimonials/Testimonials";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <Favorites />
            <Testimonials />
            <CTASection />
        </div>
    );
}

export default Home;