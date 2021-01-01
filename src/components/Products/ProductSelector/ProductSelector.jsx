import React, {useState} from "react";
import {connect} from "react-redux";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from "../../UI/Card/Card";
import ItemsCarousel from "react-items-carousel";
import SliderButton from "../../UI/SliderButton/SliderButton";

import classes from "./ProductSelector.module.css";

const ProductSelector = (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    let fetchedCandles = [];

    if (!props.loading) {
        
        fetchedCandles = props.candles.map(candle => {
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
                    onClick={() => props.handleClick(candle.id)} 
                    price={candle.price}
                    realmName={realmName}
                />
            );
        });
    }

    let numberOfCards = 1;

    if (window.innerWidth >= 1120 && props.candles.length >= 4) {
        numberOfCards = 4;
    } else if (window.innerWidth >= 880 && props.candles.length >= 3) {
        numberOfCards = 3;
    } else if (window.innerWidth >= 630) {
        numberOfCards = 2;
    }

    return (
        <React.Fragment>
            <div className={classes.Divider}></div>
            <div className={classes.ProductSelector}>
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
                    children={fetchedCandles} />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading,
        realms: state.realms.realms
    };
};

export default connect(mapStateToProps)(ProductSelector);