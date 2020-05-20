import * as actionTypes from "../actions/actionTypes";

const initialState = {
    realms: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_REALM_START:
            return {
                loading: true
            };
        case actionTypes.ADD_REALM_SUCCESS:
            const newRealm = {
                ...action.realmData, 
                id: action.realmId
            };
            return {
                ...state,
                loading: false,
                purchased: true,
                realms: state.realms.concat(newRealm)                
            };
        case actionTypes.ADD_REALM_FAIL:
            return {
                ...state, 
                loading: false
            };
        case actionTypes.FETCH_REALMS_START:
            return {
                ...state, loading: true
            };
        case actionTypes.FETCH_REALMS_SUCCESS:
            return {
                ...state, 
                realms: action.realms,
                loading: false
            };
        case actionTypes.FETCH_REALMS_FAIL:
            return {
                ...state, 
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;