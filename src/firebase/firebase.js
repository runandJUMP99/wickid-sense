import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDp5PGNR0uTklF7Kt_w2fgJgU6oXsk5SPk",
    authDomain: "wickid-sense.firebaseapp.com",
    databaseURL: "https://wickid-sense.firebaseio.com",
    projectId: "wickid-sense",
    storageBucket: "wickid-sense.appspot.com",
    messagingSenderId: "727141383636",
    appId: "1:727141383636:web:81ec0c908905bcd8836a41",
    measurementId: "G-7SHCP3J765"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();

export {storage, firebase as default};