import * as actionTypes from "../actions/actionTypes";

const initialState = {
    candles: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_CANDLE_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.ADD_CANDLE_SUCCESS:
            const newCandle = {
                ...action.candleData, 
                id: action.candleId
            };
            return {
                ...state,
                candles: state.candles.concat(newCandle),              
                loading: false
            };
        case actionTypes.REMOVE_CANDLE_SUCCESS:
            return {
                ...state,
                candles: state.candles.filter(candle => candle.id !== action.candleId),
                loading: false
            };
        case actionTypes.EDIT_CANDLE_FAIL:
            return {
                ...state, 
                loading: false
            };
        case actionTypes.FETCH_CANDLES_START:
            return {
                ...state, loading: true
            };
        case actionTypes.FETCH_CANDLES_SUCCESS:
            return {
                ...state, 
                candles: action.candles,
                loading: false
            };
        case actionTypes.FETCH_CANDLES_FAIL:
            return {
                ...state, 
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;