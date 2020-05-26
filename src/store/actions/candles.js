import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const addCandle = (token, candleData) => {
    return dispatch => {
        dispatch(editCandleStart());
        candleData = {
            ...candleData,
            favorite: false
        };

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

export const editFavoriteCandle = (token, candleData) => {
    return dispatch => {
        dispatch(editIconStart());
        if (candleData.favorite) {
            candleData = {
                ...candleData,
                favorite: !candleData.favorite
            };
        } else {
            candleData = {
                ...candleData,
                favorite: true
            };
        }

        axios.put("/candles/" + candleData.id + ".json?auth=" + token, candleData)
            .then(response => {
                dispatch(editFavoriteCandleSuccess(candleData.id, candleData));
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

export const editIconStart = () => {
    return {
        type: actionTypes.EDIT_ICON_START
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

export const editFavoriteCandleSuccess = (id, candleData) => {
    return {
        type: actionTypes.EDIT_FAVORITE_CANDLE_SUCCESS,
        candleId: id,
        candleData: candleData
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