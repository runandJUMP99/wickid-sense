import React from "react";
import {connect} from "react-redux";

import Card from "../../UI/Card/Card";

import classes from "./Favorites.module.css";
import * as actions from "../../../store/actions/index";
import candle1 from "../../../assets/images/candle1.jpg";
import candle2 from "../../../assets/images/candle2.jpg";
import candle3 from "../../../assets/images/candle3.jpg";
import candle4 from "../../../assets/images/candle4.jpg";

const Favorites = () => {
    return (
        <div className={classes.Favorites}>
            <h2>our finest creations</h2>
            <div className={classes.Candles}>
                <Card 
                    name="Zora's Wave"
                    img={candle1}
                    price="$9.99" />
                <Card 
                    name="Peachy Peach"
                    img={candle2}
                    price="$10.99" />
                <Card 
                    name="Dragon Leather"
                    img={candle3}
                    price="$8.99" />
                <Card 
                    name="Nice Cream"
                    img={candle4}
                    price="$7.99" />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.props.candles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCandles: () => dispatch(actions.fetchCandles())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);