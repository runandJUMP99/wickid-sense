import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const addCandle = (candleData) => {
    return dispatch => {
        dispatch(editCandleStart());
        console.log("editCandleStart");

        axios.post("/candles.json", candleData)
            .then(response => {
                dispatch(addCandleSuccess(response.data.name, candleData));
            })
            .catch(error => {
                dispatch(editCandleFail(error));
            });
    };
};

export const removeCandle = (candleId) => {
    return dispatch => {
        dispatch(editCandleStart());

        axios.delete("/candles.json", candleId)
            .then(response => {
                dispatch(removeCandleSuccess(candleId));
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

export const removeCandleSuccess = (id, candleData) => {
    return {
        type: actionTypes.REMOVE_CANDLE_SUCCESS,
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
        // const queryParams = '?orderBy="realm"&equalTo="' + realm + '"';
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

// case actionTypes.REMOVE_PERSON:
//             return {
//                 ...state,
//                 persons: state.persons.filter(person => person.id !== action.personId)
//             }