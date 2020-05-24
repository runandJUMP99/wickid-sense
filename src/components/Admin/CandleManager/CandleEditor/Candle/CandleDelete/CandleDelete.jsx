import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';

import classes from "./CandleDelete.module.css";

const CandleDelete = (props) => {
    return (
        <div onClick={props.onDelete} className={classes.CandleDelete}>
                <DeleteIcon />
        </div>
    );
}

export default CandleDelete;