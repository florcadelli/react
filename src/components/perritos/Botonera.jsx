import React from "react"

class Botonera extends React.Component {
    render() {
        console.log(this.props)
        const { fnP, fnM, fnG, fnT} = this.props
        return (
            <div className="opciones-tamanio">
                <button className="opcion"onClick={fnP}>Pequeños</button>
                <button className="opcion"onClick={fnM}>Medianos</button>
                <button className="opcion"onClick={fnG}>Grandes</button>
                <button className="opcion"onClick={fnT}>Todos</button>
            </div>
        )
    }
}

export default Botonera