import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const addCandle = (token, candleData) => {
    return dispatch => {
        dispatch(editCandleStart());

        axios.post("/candles.json?auth=" + token, candleData)
            .then(response => {
                dispatch(addCandleSuccess(response.data.name, candleData));
            })
            .catch(error => {
                dispatch(editCandleFail(error));
            });
    };
};

export const editCandle = (token, candleData, candleId) => {
    return dispatch => {
        dispatch(editCandleStart());

        axios.put("/candles/" + candleId + ".json?auth=" + token, candleData)
            .then(response => {
                dispatch(addCandleSuccess(response.data.name, candleData));
            })
            .catch(error => {
                dispatch(editCandleFail(error));
            });
    };
};

export const removeCandle = (token, candleId) => {
    return dispatch => {
        dispatch(editCandleStart());

        axios.delete("/candles/" + candleId + ".json?auth=" + token)
            .then(response => {
                dispatch(removeCandleSuccess(candleId));
            })
            .catch(error => {
                dispatch(editCandleFail(error));
            });
    };
};

export const addFavoriteCandle = (token, candleData, candleId) => {
    return dispatch => {
        dispatch(editCandleStart());

        axios.post("/favorites.json?auth=" + token, candleData)
            .then(response => {
                dispatch(addFavoriteCandleSuccess(response.data.name, candleData));
            })
            .catch(error => {
                dispatch(editCandleFail(error));
            });
    };
};

export const removeFavoriteCandle = (token, candleData, candleId) => {
    return dispatch => {
        dispatch(editCandleStart());

        axios.delete("/favorites/" + candleId + ".json?auth=" + token)
            .then(response => {
                dispatch(removeFavoriteCandleSuccess(response.data.name, candleData));
            })
            .catch(error => {
                dispatch(editCandleFail(error));
            });
    };
};

export const editCandleStart = () => {
    return {
        type: actionTypes.EDIT_CANDLE_START
    };
};

export const addCandleSuccess = (id, candleData) => {
    return {
        type: actionTypes.ADD_CANDLE_SUCCESS,
        candleId: id,
        candleData: candleData
    };
};

export const removeCandleSuccess = (candleId) => {
    return {
        type: actionTypes.REMOVE_CANDLE_SUCCESS,
        candleId: candleId
    };
};

export const addFavoriteCandleSuccess = (id, candleData) => {
    return {
        type: actionTypes.ADD_FAVORITE_CANDLE_SUCCESS,
        candleId: id,
        candleData: candleData
    };
};

export const removeFavoriteCandleSuccess = (candleId) => {
    return {
        type: actionTypes.REMOVE_FAVORITE_CANDLE_SUCCESS,
        candleId: candleId
    };
};

export const editCandleFail = (error) => {
    return {
        type: actionTypes.EDIT_CANDLE_FAIL,
        error: error
    };
};

export const fetchCandles = (realm) => {
    return dispatch => {
        dispatch(fetchCandlesStart());
        const queryParams = '?orderBy="realm"&equalTo="' + realm + '"';
        axios.get("/candles.json" + queryParams)
            .then(res => {
                const fetchedCandles = [];

                for (let key in res.data) {
                    fetchedCandles.push({
                        ...res.data[key],
                        id: key
                    });
                }

                dispatch(fetchCandlesSuccess(fetchedCandles));
            })
            .catch(err => {
                dispatch(fetchCandlesFail(err));
            });
    };
};
                        
export const fetchCandlesStart = () => {
    return {
        type: actionTypes.FETCH_CANDLES_START,
    };
};

export const fetchCandlesSuccess = (candles) => {
    return {
        type: actionTypes.FETCH_CANDLES_SUCCESS,
        candles: candles
    };
};

export const fetchCandlesFail = (error) => {
    return {
        type: actionTypes.FETCH_CANDLES_FAIL,
        error: error
    };
};

export const setCandleId = (candleId) => {
    return {
        type: actionTypes.SET_CANDLE_ID,
        candleId: candleId
    };
};