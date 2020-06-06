import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import CandleEditor from "./CandleEditor/CandleEditor";
import HomeIcon from '@material-ui/icons/Home';
import RealmEditor from "./RealmEditor/RealmEditor";

import classes from "./CandleManager.module.css";

const CandleManager = (props) => {
    return (
        <div className={classes.CandleManager}>
            <div className={classes.HomeIcon} >
                <NavLink to="/">
                    <HomeIcon />
                </NavLink>
            </div>
            <RealmEditor />
            <CandleEditor />
        </div>
    );
}

export default CandleManager;