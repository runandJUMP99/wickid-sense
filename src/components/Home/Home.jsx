import React from "react";
import {connect} from "react-redux";

import BathBomb from "./BathBomb/BathBomb";
import CTASection from "../CTASection/CTASection";
import Favorites from "./Favorites/Favorites";
import GlobalLoader from "../UI/GlobalLoader/GlobalLoader";
import Intro from "./Intro/Intro";
import Jumbotron from "./Jumbotron/Jumbotron";
import Testimonials from "./Testimonials/Testimonials";

import classes from "./Home.module.css";

const Home = (props) => {
    return (
        <div className={classes.Home}>
            {props.loading && <GlobalLoader />}
            {!props.loading && <Jumbotron onClick={props.onClick} onChange={props.onChange}/>}
            <div className={classes.Body}>
            {   !props.loading && <Intro />}
                <Favorites 
                    onClick={props.onClick} 
                    onFavoriteSelection={props.onFavoriteSelection}/>
                {!props.loading && <BathBomb />}
                {!props.loading && <Testimonials />}
                {!props.loading && <CTASection onClick={props.onClick}/>}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.candles.loading
    };
};

export default connect(mapStateToProps)(Home);