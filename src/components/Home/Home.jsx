import React from "react";
import {connect} from "react-redux";

import CTASection from "../CTASection/CTASection";
import Favorites from "./Favorites/Favorites";
import GlobalLoader from "../UI/GlobalLoader/GlobalLoader";
import Jumbotron from "./Jumbotron/Jumbotron";
import Testimonials from "./Testimonials/Testimonials";

import classes from "./Home.module.css";

const Home = (props) => {
    return (
        <div className={classes.Home}>
            {props.loading && <GlobalLoader />}
            <Jumbotron />
            <Favorites 
                onClick={props.onClick} 
                onFavoriteSelection={props.onFavoriteSelection}/>
            <Testimonials />
            <CTASection onClick={props.onClick}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.candles.loading
    };
};

export default connect(mapStateToProps)(Home);