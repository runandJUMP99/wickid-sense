import axios from 'axios';

const instance = axios.create({
    baseURL: "https://wickid-sense.firebaseio.com/"
});

export default instance;