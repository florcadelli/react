import React, { Component } from "react";
import Portada from "../components/portada/Portada";
import Cv from "../components/cv/Cv";

// import LayoutPrincipal from "../layout/LayoutPrincipal";

import { Router, Route, IndexRoute, browserHistory } from "react-router-3";


const App = ({props}) => {
return (

   <div className="app">

       <Router history={browserHistory}>
          <Route path="/" component={Portada}/>
          <Route path="/cv" component={Cv}/>
         
      </Router>


   </div>
   
)
}

export default App