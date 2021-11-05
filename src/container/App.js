import React, { Component } from "react";
import Portada from "../components/portada/Portada";
import Cv from "../components/cv/Cv";
import Aventura from "../components/aventura/Aventura";

import { Route, Switch} from "react-router-dom";

const App = ({ props }) => {
  return (
    <div className="app">
      
      <Switch>
        <Route exact path="/"> <Portada /> </Route>
        <Route path="/cv"> <Cv /> </Route>
        <Route path="/aventura"> <Aventura /> </Route>
      </Switch>
    </div>
  );
};

export default App;
