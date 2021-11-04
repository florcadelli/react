import React, { Component } from "react";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";


const Portada = ({props}) => {
return (

   <div className="portada">
       <div class="container">
          <Main/>
          <Nav/>
       </div>
       <Footer/>
   </div>
   
)
}

export default Portada