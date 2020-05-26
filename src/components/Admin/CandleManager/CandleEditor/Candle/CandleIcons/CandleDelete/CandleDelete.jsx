import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';
import Spinner from "../../../../../../UI/Spinner/Spinner";

import classes from "./CandleDelete.module.css";

const CandleDelete = props => {
    return (
        <div onClick={props.onDelete} className={classes.CandleDelete}>
            {props.iconLoading ? <Spinner /> : <DeleteIcon />}
        </div>
    );
};

export default CandleDelete;