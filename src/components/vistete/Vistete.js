import React from 'react'
import Header from "./Header";
import Main from "./Main";
import gralVistete from "../../styles/__gralVistete.css";

const Vistete = ({props}) => {
return (

<div class="container-fluid">
   <Header/>
   <Main/>

   {/* <%-include("./partials/footer")%> */}
</div>
)
}

export default Vistete
