import * as actionTypes from "../actions/actionTypes";

const initialState = {
    realms: [],
    loading: false,
    setRealmId: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_REALM_START:
            return {
                ...state,
                loading: true,
                setRealmId: null
            };
        case actionTypes.ADD_REALM_SUCCESS:
            const newRealm = {
                ...action.realmData, 
                id: action.realmId
            };
            return {
                ...state,
                loading: false,
                realms: state.realms.concat(newRealm),
                setRealmId: null
            };
        case actionTypes.REMOVE_REALM_SUCCESS:
            return {
                ...state,
                loading: false,
                realms: state.realms.filter(realm => realm.id !== action.realmId)
            };
        case actionTypes.EDIT_REALM_FAIL:
            return {
                ...state, 
                loading: false
            };
        case actionTypes.FETCH_REALMS_START:
            return {
                ...state, 
                loading: true
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
        case actionTypes.SET_REALM_ID:
            return {
                ...state,
                setRealmId: action.realmId
            };
        default:
            return state;
    }
};

export default reducer;