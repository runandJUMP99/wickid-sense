import React, {useEffect, useState} from "react";

import FavoriteIcon from '@material-ui/icons/Favorite';

import classes from "./CandleFavorite.module.css";

const CandleFavorite = props => {
    const [styles, setStyles] = useState(null);

    useEffect(() => {
        if (props.favorite) {
            setStyles({
                background: "#75daad",
                color: "#edffea"
            });
        }
    }, []);

    function toggleStyles() {
        if (styles) {
            setStyles(null);
        } else {
            setStyles({
                background: "#75daad",
                color: "#edffea"
            });
        }
    }

    return (
        <div onClick={toggleStyles}>
            <div onClick={props.onFavorite} className={classes.CandleFavorite} style={styles}>
                <FavoriteIcon />
            </div>
        </div>
    );
};

export default CandleFavorite;