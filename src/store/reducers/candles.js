import * as actionTypes from "../actions/actionTypes";

const initialState = {
    candles: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CANDLE_START:
            return {
                loading: true
            };
        case actionTypes.ADD_CANDLE_SUCCESS:
            const newOrder = {
                ...action.orderData, 
                id: action.orderId
            };
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)                
            };
        case actionTypes.ADD_CANDLE_FAIL:
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
                orders: action.orders,
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