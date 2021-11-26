import React, { Component } from "react";

class Recordatorio extends Component {
  render() {
    const { ultimaEleccion, historial } = this.props;
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {ultimaEleccion}</h3>

        <h3>Historial de opciones elegidas: </h3>
        <ul>
          {historial.map((opcion, i) => (
            <li key={opcion + i}>{opcion}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Recordatorio;
