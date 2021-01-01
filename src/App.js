import React, {useEffect, Suspense} from 'react';
import {connect} from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import GlobalLoader from "./components/UI/GlobalLoader/GlobalLoader";

import "./index.css";
import * as actions from "./store/actions/index";


const Admin = React.lazy(() => {
  return import("./components/Admin/Admin");
})

const CandleManager = React.lazy(() => {
  return import("./components/Admin/CandleManager/CandleManager");
})

function App(props) {
  useEffect(() => {
    props.onTryAutoSignup();
  }, [props]);

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
      <Suspense fallback={<GlobalLoader />}>
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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
