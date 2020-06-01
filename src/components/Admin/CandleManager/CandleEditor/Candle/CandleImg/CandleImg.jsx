import React from "react";

import classes from "./CandleImg.module.css";

const CandleImg = (props) => {
    return (
        <div className={classes.CandleImg}>
                <img src={props.img} alt={props.name} />
        </div>
    );
}

export default CandleImg;