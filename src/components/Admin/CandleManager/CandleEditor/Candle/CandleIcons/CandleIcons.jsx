import React from "react";

import CandleDelete from "./CandleDelete/CandleDelete";
import CandleFavorite from "./CandleFavorite/CandleFavorite";

import classes from "./CandleIcons.module.css";

const CandleIcons = (props) => {
    return (
        <div className={classes.CandleIcons}>
            <CandleFavorite 
                onFavorite={props.onFavorite} 
                favorite={props.favorite}/>
            <CandleDelete onDelete={props.onDelete} />              
               
        </div>
    );
};

export default CandleIcons;