import React, { useState } from "react";

import CandleEditor from "./CandleEditor/CandleEditor";
import RealmEditorSelector from "./RealmEditorSelector/RealmEditorSelector";

import classes from "./CandleManager.module.css";

const CandleManager = () => {
    const [realm, setRealm] = useState({
        realmName: "realm",
        candles: {
            candleName: "candle",
            candleImg: "img",
            candlePrice: "price"            
        }
    });

    const handleClick = (selectedRealm) => {
        setRealm({
            realmName: selectedRealm,
            candles: {
                candleName: selectedRealm,
            candleImg: selectedRealm,
            candlePrice: selectedRealm   
            }
        })
    };

    return (
        <div className={classes.CandleManager}>
            <h1>assistant regional candle manager</h1>
            <RealmEditorSelector onClick={handleClick}/>
            <h2>{realm.realmName}</h2>
            <CandleEditor 
                name={realm.candles.candleName}
                price={realm.candles.candlePrice}
                onClick={handleClick}/>
        </div>
    );
}

export default CandleManager;