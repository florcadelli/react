import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ({props}) => {
return (
        <nav>
            <ul className="ul-portada">
                <li className="postit rosa"><Link to="/cv">Curriculum Vitae</Link></li>
                <li className="postit celeste"><Link to="/aventura">Elige tu propia aventura</Link></li>
                <li className="postit amarillo"><Link to="/perritos">Galería Perritos</Link></li>
                <li className="postit verde"><Link to="/e-commerce">E-commerce</Link></li>
                {/* <li className="postit violeta"><a href="./evaluacion/">Evaluación</a></li> */}
                {/* <li className="postit celeste"><a href="./#/">Grid</a></li> */}
                {/* <li className="postit amarillo"><a href="./sass/">SASS</a></li> */}
            </ul>

        </nav>
)
}

export default Nav
