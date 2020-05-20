import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const addRealm = (realmData) => {
    return dispatch => {
        dispatch(addRealmStart());

        axios.post("/realms.json", realmData)
            .then(response => {
                dispatch(addRealmSuccess(response.data.name, realmData));
            })
            .catch(error => {
                dispatch(addRealmFail(error));
            });
    };
};

export const addRealmStart = () => {
    return {
        type: actionTypes.ADD_REALM_START
    };
};

export const addRealmSuccess = (id, realmData) => {
    return {
        type: actionTypes.ADD_REALM_SUCCESS,
        realmId: id,
        realmData: realmData
    };
};

export const addRealmFail = (error) => {
    return {
        type: actionTypes.ADD_REALM_FAIL,
        error: error
    };
};

export const fetchRealms = (token, userId) => {
    return dispatch => {
        dispatch(fetchRealmsStart());
        axios.get("/realms.json")
            .then(res => {
                const fetchedRealms = [];

                for (let key in res.data) {
                    fetchedRealms.push({
                        ...res.data[key],
                        id: key
                    });
                }

                dispatch(fetchRealmsSuccess(fetchedRealms));
            })
            .catch(err => {
                dispatch(fetchRealmsFail(err));
            });
    };
};

export const fetchRealmsStart = () => {
    return {
        type: actionTypes.FETCH_REALMS_START,
    };
};

export const fetchRealmsSuccess = (realms) => {
    return {
        type: actionTypes.FETCH_REALMS_SUCCESS,
        realms: realms
    };
};

export const fetchRealmsFail = (error) => {
    return {
        type: actionTypes.FETCH_REALMS_FAIL,
        error: error
    };
};