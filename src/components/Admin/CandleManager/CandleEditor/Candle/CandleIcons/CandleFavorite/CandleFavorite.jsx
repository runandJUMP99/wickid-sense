import React from "react";
import {connect} from "react-redux";

import FavoriteIcon from '@material-ui/icons/Favorite';
import SpinnerMini from "../../../../../../UI/SpinnerMini/SpinnerMini";

import classes from "./CandleFavorite.module.css";

const CandleFavorite = props => {
    return (
        <div onClick={props.onFavorite} className={classes.CandleFavorite} style={{
            background: props.favorite && "#75daad",
            color: props.favorite && "#edffea"
        }}>
            {props.iconLoading ? <SpinnerMini /> : <FavoriteIcon />}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        iconLoading: state.candles.iconLoading
    };
};

export default connect(mapStateToProps)(CandleFavorite);