import React from "react";
import Tarjeta from "./Tarjeta.jsx";

const ListadoPerritos = ({ data }) => {
  // console.log(data)
  return (
    
    <div className="listado-perritos">

       {data.map((perro, i) => (
          <Tarjeta
            key={perro.nombre + i}
            img={perro.img}
            nombre={perro.nombre}
            tamanio={perro.tamanio}   
          />
        ))} 
    
    </div>
  );
};
export default ListadoPerritos;

