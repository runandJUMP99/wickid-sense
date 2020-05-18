import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const addCandle = (candleData) => {
    return dispatch => {
        dispatch(addCandleStart());

        axios.post("/candles.json", candleData)
            .then(response => {
                dispatch(addCandleSuccess(response.data.name, candleData));
            })
            .catch(error => {
                dispatch(addCandleFail(error));
            });
    };
};

export const addCandleStart = () => {
    return {
        type: actionTypes.ADD_CANDLE_START
    };
};

export const addCandleSuccess = (id, candleData) => {
    return {
        type: actionTypes.ADD_CANDLE_SUCCESS,
        orderId: id,
        candleData: candleData
    };
};

export const addCandleFail = (error) => {
    return {
        type: actionTypes.ADD_CANDLE_FAIL,
        error: error
    };
};

export const fetchCandles = (token, userId) => {
    return dispatch => {
        dispatch(fetchCandlesStart());
        // const queryParams = "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get("/candles.json")
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

export const fetchCandlesSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_CANDLES_SUCCESS,
        orders: orders
    };
};

export const fetchCandlesFail = (error) => {
    return {
        type: actionTypes.FETCH_CANDLES_FAIL,
        error: error
    };
};

export const fetchCandlesStart = () => {
    return {
        type: actionTypes.FETCH_CANDLES_START,
    };
};