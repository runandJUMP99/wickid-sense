import * as actionTypes from "../actions/actionTypes";

const initialState = {
    candles: [],
    loading: false,
    setCandleId: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_CANDLE_START:
            return {
                ...state,
                loading: true,
                setCandleId: null
            };
        case actionTypes.ADD_CANDLE_SUCCESS:
            const newCandle = {
                ...action.candleData, 
                id: action.candleId
            };
            return {
                ...state,
                candles: [newCandle],
                loading: false,
                setCandleId: null
            };
        case actionTypes.REMOVE_CANDLE_SUCCESS:
            return {
                ...state,
                candles: state.candles.filter(candle => candle.id !== action.candleId),
                loading: false,
                setCandleId: null
            };
        case actionTypes.EDIT_FAVORITE_CANDLE_SUCCESS:
            state.candles.forEach(candle => {
                if (action.candleData.id === candle.id) {
                    candle.favorite = !candle.favorite;
                }
            });
            return {
                ...state,
                setCandleId: null
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
            case actionTypes.SET_CANDLE_ID:
                return {
                    ...state,
                    setCandleId: action.candleId
                };
        default:
            return state;
    }
};

export default reducer;