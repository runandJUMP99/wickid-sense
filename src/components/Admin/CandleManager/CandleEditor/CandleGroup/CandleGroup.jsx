import React, { useState } from "react";

import classes from "./CandleGroup.module.css";

const CandleGroup = () => {
    const [candles, setCandles] = useState([]);

    function handleChange(realm) {
        let candles = [];

        switch (realm) {
            case 0:
                candles = [<Candle name="Candle of Immunity" onClick={() => toggleModal("candle")} />,
                    <Candle name="Immunity of Candle" onClick={() => toggleModal("candle")} />,
                    <Candle name="Wisp of Enlightenment" onClick={() => toggleModal("candle")} />,
                    <Candle name="Enlightening Wisp" onClick={() => toggleModal("candle")} />,
                    <Candle name="Carl" onClick={() => toggleModal("candle")} />];
                break;
            case 1:
                candles = [<Candle name="Candle of Immunity0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Immunity of Candle0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Wisp of Enlightenment0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Enlightening Wisp0" onClick={() => toggleModal("candle")} />,
                    <Candle name="Carl0" onClick={() => toggleModal("candle")} />];
                break;
            case 2:
                candles = [<Candle name="Candle of Immunity1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Immunity of Candle1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Wisp of Enlightenment1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Enlightening Wisp1" onClick={() => toggleModal("candle")} />,
                    <Candle name="Carl1" onClick={() => toggleModal("candle")} />];
                break;
            default:
                candles = "changed";
                break;
        }

        setCandles(candles);
    }

    return (
        <div className={classes.CandleGroup}>
            candlegroup
        </div>
    );
}

export default CandleGroup;