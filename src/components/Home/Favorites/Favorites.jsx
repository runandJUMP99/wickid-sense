import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from "../../UI/Card/Card";
import ItemsCarousel from "react-items-carousel";
import Slide from "react-reveal/Slide";
import SliderButton from "../../UI/SliderButton/SliderButton";

import classes from "./Favorites.module.css";
import * as actions from "../../../store/actions/index";


const Favorites = (props) => {
    useEffect(() => {
        props.onFetchCandles();
        props.onFetchRealms();
    }, [props.onFetchCandles, props.onFetchRealms]);

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    function selectFavorite(candleId, realmId) {
        props.onSetCandleId(candleId);
        props.onFavoriteSelection(realmId);
    }

    let loadedCandles;
    let favoriteCandles = [];

    if (!props.loading) {
        loadedCandles = props.candles.filter(candle => candle.favorite);

        favoriteCandles = loadedCandles.map(candle => {
            let realmName = "";

            props.realms.forEach(realm => {
                if (realm.id === candle.realm) {
                    realmName = realm.name;
                }
            });

            return (
                <Card
                    key={candle.id} 
                    img={candle.img}
                    name={candle.name}
                    onClick={() => selectFavorite(candle.id, candle.realm)}
                    price={candle.price}
                    realmName={realmName}
                />
            )
        });
    }

    let numberOfCards = 1;

    if (window.innerWidth >= 1525 && props.candles.length >= 4) {
        numberOfCards = 4;
    } else if (window.innerWidth >= 1080 && props.candles.length >= 3) {
        numberOfCards = 3;
    } else if (window.innerWidth >= 760) {
        numberOfCards = 2;
    }

    return (
        <div className={classes.Favorites}>
            <h2>Our Finest Creations</h2>
            <p>Browse through our most popular candles!</p>
            <Slide left>
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
                        children={favoriteCandles} />
                </div>
            </Slide>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading,
        realms: state.realms.realms,
        setCandleId: state.candles.setCandleId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCandles: () => dispatch(actions.fetchCandles()),
        onFetchRealms: () => dispatch(actions.fetchRealms()),
        onSetCandleId: (candleId) => dispatch(actions.setCandleId(candleId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);