import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import GlobalLoader from "../UI/GlobalLoader/GlobalLoader";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductSelector from "./ProductSelector/ProductSelector";

import classes from "./Products.module.css"

const Product = (props) => {
    const [selectedCandle, setSelectedCandle] = useState();
    const [fade, setFade] = useState(false);

    useEffect(() => {
        let selection = 0;
        let complete = false;

        if (props.setCandleId) {
            props.candles.forEach(candle => {
                if (candle.id !== props.setCandleId && !complete) {
                    selection++; 
                } else {
                    complete = true;
                }
            });
        }

        setSelectedCandle({
            name: props.candles[selection].name,
            img: props.candles[selection].img,
            price: props.candles[selection].price,
            description: props.candles[selection].description
        });
    }, [props.candles]);

    const handleClick = (selection) => {
        setFade(true);

        setTimeout(() => {
            props.candles.forEach(candle => {
                if (candle.id === selection) {
                    setSelectedCandle({
                        name: candle.name,
                        img: candle.img,
                        price: candle.price,
                        description: candle.description
                    });
                }
            });
        }, 1000);

        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    let selectedProduct;
    let selectedInfo;

    if (!props.loading) {
        selectedProduct = (
            <ProductDisplay
                img={selectedCandle.img}
                name={selectedCandle.name}
                fade={fade} />
        );
        selectedInfo = (
            <ProductInfo 
                name={selectedCandle.name}
                price={selectedCandle.price}
                info={selectedCandle.description}
                fade={fade} />
        ); 
    }

    return (
        <div className={classes.Products}>
            {props.loading && <GlobalLoader />}
            <div className={classes.ProductsTop}>
                {selectedProduct}
                {selectedInfo}  
            </div>
            <ProductSelector handleClick={handleClick}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading,
        setCandleId: state.candles.setCandleId
    };
};

export default connect(mapStateToProps)(Product);