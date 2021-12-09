import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ({props}) => {
return (
        <nav>
            <ul className="ul-portada">
                <li className="postit rosa"><Link to="/cv">Curriculum Vitae </Link></li>
                <li className="postit celeste"><Link to="/aventura"> <p className="largo"> Elige tu propia aventura</p> <p className="corto">Aventura</p><p className="descripcion"> Modifica el transcurso de la historia tomando decisiones en cada momento</p></Link></li>
                <li className="postit amarillo"><Link to="/perritos">Galería Perritos<p className="descripcion"> Encuentra tus perritos favoritos filtrando por tamaño</p></Link></li>
                <li className="postit verde"><Link to="/e-commerce">Ecommerce<p className="descripcion"> Home del sitio de compras para la marca "Vistete de Poder"</p></Link></li>
                {/* <li className="postit violeta"><Link to="/dashboard">Dashboard<p className="descripcion"> "Reflejo de metricas del Ecommerce consumidas por Api"</p></Link></li> */}
                <li className="postit violeta"><Link to="/colores">Juego Colores<p className="descripcion"> Aprieta el boton para cambiar los colores aleatoriamente</p></Link></li> 
                {/* <li className="postit celeste"><a href="./#/">Grid</a></li> */}
                {/* <li className="postit amarillo"><a href="./sass/">SASS</a></li> */}
            </ul>

        </nav>
)
}

export default Nav
