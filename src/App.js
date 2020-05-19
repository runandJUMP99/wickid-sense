import React, {Suspense} from 'react';
import {connect} from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Spinner from "./components/UI/Spinner/Spinner";

import './App.css';
import "./index.css";

const Admin = React.lazy(() => {
  return import("./components/Admin/Admin");
})

const CandleManager = React.lazy(() => {
  return import("./components/Admin/CandleManager/CandleManager");
})

function App(props) {
  let routes = (
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/admin" render={() => <Admin {...props} />} />
    </Switch>
  );


  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/admin" render={() => <Admin {...props} />} />
        <Route path="/candlemanager" render={() => <CandleManager {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        {routes}
      </Suspense>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(App);
