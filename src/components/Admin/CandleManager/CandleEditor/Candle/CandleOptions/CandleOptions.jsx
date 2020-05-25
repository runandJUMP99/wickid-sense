import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

import classes from "./CandleOptions.module.css";

const CandleDelete = (props) => {
    return (
        <div className={classes.CandleOptions}>
            <div onClick={props.onFavorite} className={classes.CandleOption}>
                <FavoriteIcon />    
            </div>
            <div onClick={props.onDelete} className={classes.CandleOption}>
                <DeleteIcon /> 
            </div>
        </div>
    );
}

export default CandleDelete;