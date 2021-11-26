import React, { Component } from "react";
import Portada from "../components/portada/Portada";
import Cv from "../components/cv/Cv";
import Aventura from "../components/aventura/Aventura";
import Perritos from "../components/perritos/Perritos";
import Vistete from "../components/vistete/Vistete";

import { Route, Switch} from "react-router-dom";

const App = ({ props }) => {
  return (
    <div>
      
      <Switch>
        <Route exact path="/"> <Portada /> </Route>
        <Route path="/cv"> <Cv /> </Route>
        <Route path="/aventura"> <Aventura /> </Route>
        <Route path="/perritos"> <Perritos /> </Route>
        <Route path="/e-commerce"> <Vistete /> </Route>
      </Switch>
    </div>
  );
};

export default App;
