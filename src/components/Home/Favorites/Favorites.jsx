import React, {useEffect} from "react";
import {connect} from "react-redux";

import Card from "../../UI/Card/Card";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./Favorites.module.css";
import * as actions from "../../../store/actions/index";


const Favorites = (props) => {
    useEffect(() => {
        props.onFetchCandles();
    }, [props.onFetchCandles]);

    let content = <Spinner />;

    if (!props.loading) {
        const favoriteCandles = props.candles.filter(candle => candle.favorite);

        content = favoriteCandles.map(candle => (
            <Card
                key={candle.id} 
                name={candle.name}
                img={candle.img}
                price={candle.price} />
        ));
    }

    return (
        <div className={classes.Favorites}>
            <h2>our finest creations</h2>
            <div className={classes.Candles}>
                {content}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCandles: () => dispatch(actions.fetchCandles())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);