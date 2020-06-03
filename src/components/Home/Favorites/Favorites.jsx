import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from "../../UI/Card/Card";
import ItemsCarousel from "react-items-carousel";
import SliderButton from "../../UI/SliderButton/SliderButton";
import GlobalLoader from "../../UI/GlobalLoader/GlobalLoader";

import classes from "./Favorites.module.css";
import * as actions from "../../../store/actions/index";


const Favorites = (props) => {
    useEffect(() => {
        props.onFetchCandles();
    }, [props.onFetchCandles]);

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    let loadedCandles;
    let favoriteCandles = [];

    if (!props.loading) {
        favoriteCandles = props.candles.filter(candle => candle.favorite);

        loadedCandles = favoriteCandles.map(candle => (
            <Card
                key={candle.id} 
                name={candle.name}
                img={candle.img}
                price={candle.price} />
        ));
    }

    let numberOfCards = 1;

    if (window.innerWidth >= 1400 && props.candles.length >= 4) {
        numberOfCards = 4;
    } else if (window.innerWidth >= 1080 && props.candles.length >= 3) {
        numberOfCards = 3;
    } else if (window.innerWidth >= 760) {
        numberOfCards = 2;
    }

    return (
        <div className={classes.Favorites}>
            <h2>our finest creations</h2>
            <div className={classes.Candles}>
                <ItemsCarousel
                    infiniteLoop
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={numberOfCards}
                    gutter={8}
                    leftChevron={<SliderButton>
                                    <ArrowBackIosIcon />
                                </SliderButton>}
                    rightChevron={<SliderButton>
                                    <ArrowForwardIosIcon />
                                </SliderButton>}
                    outsideChevron
                    chevronWidth={40}
                    children={loadedCandles} />
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