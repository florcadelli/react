import React from "react"

class Header extends React.Component {
    render() {
       const { tamanio} = this.props;
        return (
            <header>
                <h1>Perritos</h1>
                <h3>Seleccionaste: {tamanio}</h3>
            </header>
        )
    }
}

export default Header