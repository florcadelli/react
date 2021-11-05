import React, { Component } from "react";
import data from "./data.json";
import Historia from "./Historia";
import Botonera from "./Botonera";
import Recordatorio from "./Recordatorio";



class Aventura extends Component {
  constructor() {
    super();
    this.state = {
      presentacion: true,
      botonera: false,
      historia: "",
      opcionA: "",
      opcionB: "",
      ultimaEleccion: "",
      historial: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        presentacion: false,
        botonera: true,
        historia: data[0].historia,
        opcionA: data[0].opciones.a,
        opcionB: data[0].opciones.b,
      });

    }, 1000);
  }

  contador = 1;

  HandlerClick = (e) => {
    this.contador++
    if (this.contador >= 6) {
      alert("Fin")
    } else {
      for (let i = 0; i < data.length; i++) {
        if ((this.contador + e.target.value.toLowerCase()) === data[i].id) {
          this.setState({
            historia: data[i].historia,
            opcionA: data[i].opciones.a,
            opcionB: data[i].opciones.b,
            ultimaEleccion: e.target.value,
          })
          if (this.contador >= 3) {
            this.setState({
              historial: [...this.state.historial, this.state.ultimaEleccion]
            })
          }
        }
      }
    }
  }


  render() {
    let presentacion;
    if (this.state.presentacion) {
      presentacion = (
        <h2 className="opciones">PREPARATE PARA VIVIR UNA GRAN AVENTURA...</h2>
      );
    }


    let botonera;
    let recordatorio;
    if (this.state.botonera) {
      botonera = (
        <Botonera
          fn={this.HandlerClick}
          textoA={this.state.opcionA}
          textoB={this.state.opcionB}
        />
      );
      recordatorio = (
        <Recordatorio
          ultimaEleccion={this.state.ultimaEleccion}
          historial={this.state.historial}
        />
      )
    }

    return (
      <div className="aventura">
       

        <div className="layout">
          {presentacion}
          <Historia historia={this.state.historia} />
          {botonera}
          {recordatorio}
        </div>
      </div>
    );
  }
}
export default Aventura;
