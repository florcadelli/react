import React, { Component } from "react";
import Portada from "../components/portada/Portada";
import Cv from "../components/cv/Cv";

// import LayoutPrincipal from "../layout/LayoutPrincipal";

// import { Router, Route, IndexRoute, browserHistory } from "react-router-3";
// import { Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = ({ props }) => {
  return (
    <div className="app">
      {/* <Portada /> */}
      {/* 
       <Switch>
          <Route exact path="/" component={Portada}/>
          <Route path="/cv" component={Cv}/>
         
      </Switch> */}
      <Switch>
        <Route exact path="/">
          <Portada />
        </Route>
        <Route path="/cv">
          <Cv />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
