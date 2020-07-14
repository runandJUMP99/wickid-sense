import React, {useState} from "react";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import classes from "./NavigationLinks.module.css";

const NavigationLinks = (props) => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    
    function handleMouseEvent(selection) {
        if (selection === "candles") {
            if (visible1) {
                setVisible1(false);
            } else {
                setVisible1(true);
            }
        } else {
            if (visible2) {
                setVisible2(false);
            } else {
                setVisible2(true);
            }
        }
    }

    return (
        <div className={classes.NavigationLinks}>
            <ul>
                <li className={classes.Link} onClick={props.onChange} onMouseOver={() => handleMouseEvent("candles")} onMouseOut={() => handleMouseEvent("candles")}>
                    Candles <ArrowDropDownIcon />
                    <article className={classes.Dropdown} style={{visibility: visible1 && "visible", opacity: visible1 && 1}}>
                        <li>Large 16oz Jars</li>
                        <li>Three-Wick Candles</li>
                        <li>Aromatherapy</li>
                    </article>
                </li>
                <li className={classes.Link} onClick={props.onChange}>Bath Bombs</li>
                <li className={classes.Link} onClick={props.onChange} onMouseOver={handleMouseEvent} onMouseOut={handleMouseEvent}>
                    Flameless Fragrance <ArrowDropDownIcon />
                    <article className={classes.Dropdown} style={{visibility: visible2 && "visible", opacity: visible2 && 1}}>
                        <li>Plug-ins</li>
                        <li>Sprays</li>
                    </article>
                </li>
                <li className={classes.Link} onClick={() => props.onClick("products")}>Shop By Realm</li>
            </ul>
        </div>
    )
}

export default NavigationLinks;