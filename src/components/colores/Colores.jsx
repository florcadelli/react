import React, { Component } from 'react'
import Button from './Button'
import "../../styles/__colores.css";

export default class Colores extends Component {
  colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]

  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle (barajar) mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */

state = {
  colors : this.colors
}

  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */

 //dentro de las clases las funciones no llevan la palabra function
 shuffle(colors){
  return colors.sort(() => Math.random() - 0.5);
 };


 //resolverShuffle
 handleShuffle = () => {
   //ejecuta shuffle y la guarda en result
  let result = this.shuffle(this.state.colors)
  //setea el nuevo estado en el state
  this.setState({colors:result})
}

  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        {/* envia la funcion */}
        <Button fn={this.handleShuffle} />
      </div>

    )
  }
}