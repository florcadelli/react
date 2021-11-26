import React, { Component } from "react";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";
import portada from "../../styles/__portada.css";


const Portada = ({props}) => {
return (

   <div className="portada">

       <div class="cont">
          <Main/>
          <Nav/>
       </div>
       <Footer/>
   </div>
   
)
}

export default Portada