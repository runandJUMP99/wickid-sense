import React from "react";
import {connect} from "react-redux";

import Card from "../../UI/Card/Card";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./ProductSelector.module.css";

const ProductSelector = (props) => {
    let fetchedCandles = (
        <div style={{
            background: "#edffea",
            borderRadius: "8px",
            boxShadow: "0 1px 2px 1px rgba(0, 0, 0, 0.5)",
            margin: "auto",
            padding: "1rem",
            width: "325px"
        }}>
            <Spinner />
        </div>
    );

    if (!props.loading) {
        fetchedCandles = props.candles.map(candle => (
            <Card
                key={candle.id}
                name={candle.name}
                img={null}
                price={candle.price}
                onClick={() => props.handleClick(candle.id)} />
        ));
    }

    return (
        <div className={classes.ProductSelector}>
            {fetchedCandles}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading
    };
};

export default connect(mapStateToProps)(ProductSelector);