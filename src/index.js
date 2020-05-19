import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import authReducer from "./store/reducers/auth";
import candlesReducer from "./store/reducers/candles";
import realmsReducer from "./store/reducers/realms";

const rootReducer = combineReducers({
  auth: authReducer,
  candles: candlesReducer,
  realms: realmsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
