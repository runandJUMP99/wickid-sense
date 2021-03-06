import {storage} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const addRealm = (token, realmData) => {
    return dispatch => {
        dispatch(editRealmStart());
        
        axios.post("/realms.json?auth=" + token, realmData)
            .then(response => {
                dispatch(setRealmId(response.data.name));
                dispatch(addRealmSuccess(response.data.name, realmData));
            })
            .catch(error => {
                dispatch(editRealmFail(error));
            });
    };
};

export const editRealm = (token, realmData, realmId) => {
    return dispatch => {
        dispatch(editRealmStart());
        
        axios.put("/realms/" + realmId + ".json?auth=" + token, realmData)
            .then(response => {
                dispatch(removeRealmSuccess(realmId));
                dispatch(addRealmSuccess(realmId, realmData));
            })
            .catch(error => {
                dispatch(editRealmFail(error));
            });
    };
};


export const removeRealm = (token, realmId, imgName) => {
    return dispatch => {
        dispatch(editRealmStart());
        
        axios.delete("/realms/" + realmId + ".json?auth=" + token)
            .then(response => {
                storage.ref(`/images/${imgName}`).delete()
                    .then(() => {
                    })
                    .catch(error => {
                        console.log(error);
                    });
                    
                dispatch(removeRealmSuccess(realmId));
            })
            .catch(error => {
                dispatch(editRealmFail(error));
            });
    };
};

export const editRealmStart = () => {
    return {
        type: actionTypes.EDIT_REALM_START
    };
};

export const addRealmSuccess = (id, realmData) => {
    return {
        type: actionTypes.ADD_REALM_SUCCESS,
        realmId: id,
        realmData: realmData
    };
};

export const removeRealmSuccess = (realmId) => {
    return {
        type: actionTypes.REMOVE_REALM_SUCCESS,
        realmId: realmId
    };
};

export const editRealmFail = (error) => {
    return {
        type: actionTypes.EDIT_REALM_FAIL,
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

export const setRealmId = (realmId) => {
    return {
        type: actionTypes.SET_REALM_ID,
        realmId: realmId
    };
};