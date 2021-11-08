import React from "react";
import Header from "./Header.jsx";
import Botonera from "./Botonera.jsx";
import ListadoPerritos from "./ListadoPerritos.jsx";
import data from "./data.json";
import perritos from "../../styles/__perritos.css";


class Perritos extends React.Component {
  constructor() {
    super();
    this.state = {
      tamanio:"Pequeños",
      perritos: data.filter(perro => perro.tamanio == "Pequeño")
    };
  }
 

handleClickPequenio = () => {
    let pequenios = data.filter(perro => perro.tamanio == "Pequeño")
    this.setState({ tamanio:"Pequeños", perritos: pequenios });
  };

handleClickMediano = () => {
    let medianos = data.filter(perro => perro.tamanio == "Mediano")
    this.setState({ tamanio:"Medianos", perritos: medianos });
  };

handleClickGrande = () => {
    let grandes = data.filter(perro => perro.tamanio == "Grande")
    this.setState({ tamanio:"Grandes", perritos: grandes });
  };
handleClickTodos = () => {
    let todos = data.map(perro => perro)
    this.setState({ tamanio:"Todos",perritos: todos });
  };
  render() {
    console.log(this.state.perritos)
    return (
      <div className="app">
        <Header tamanio={this.state.tamanio}/>
        <main>
          <ListadoPerritos data={this.state.perritos}/>
          <Botonera 
           fnP={this.handleClickPequenio}
           fnM={this.handleClickMediano}
           fnG={this.handleClickGrande}
           fnT={this.handleClickTodos}
          />
        </main>
      </div>
    );
  }
}

export default Perritos;
