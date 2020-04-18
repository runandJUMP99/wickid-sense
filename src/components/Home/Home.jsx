import React from "react";

import CTASection from "./CTASection/CTASection";
import Favorites from "./Favorites/Favorites"
import Jumbotron from "./Jumbotron/Jumbotron";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Jumbotron />
            <Favorites />
            <Testimonials />
            <CTASection />
        </div>
    );
}

export default Home;