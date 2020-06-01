import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import ProductDisplay from "./ProductDisplay/ProductDisplay";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductSelector from "./ProductSelector/ProductSelector";
import Spinner from "../UI/Spinner/Spinner";

import classes from "./Products.module.css"

const Product = (props) => {
    const [selectedCandle, setSelectedCandle] = useState();
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setSelectedCandle({
            name: props.candles[0].name,
            price: props.candles[0].price,
            description: props.candles[0].description
        });
    }, [props.candles]);

    const handleClick = (selection) => {
        setFade(true);

        setTimeout(() => {
            props.candles.forEach(candle => {
                if (candle.id === selection) {
                    setSelectedCandle({
                        name: candle.name,
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

    let selectedInfo = (
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
    
    let selectedProduct = (
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
        selectedProduct = (
            <ProductDisplay
                img=""
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
        loading: state.candles.loading
    };
};

export default connect(mapStateToProps)(Product);