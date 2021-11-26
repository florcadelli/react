import React from "react";

class Tarjeta extends React.Component {
  
  render() {
    
    const { img, nombre, tamanio } = this.props
    // console.log(img)
  
    return (
      <div className="perrito">
        <img src={process.env.PUBLIC_URL + "/perritos-img/"+ img }  alt="caniche" />
       
        <div>
          <h4>{nombre}</h4>
          <small>{tamanio}</small>
        </div>
      </div>
    );
  }
}

export default Tarjeta;
