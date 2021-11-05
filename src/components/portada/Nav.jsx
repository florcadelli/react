import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ({props}) => {
return (
        <nav>
            <ul>
                <li class="rosa"><Link to="/cv">Curriculum Vitae</Link></li>
                <li class="celeste"><Link to="/aventura">Elige tu propia aventura</Link></li>
                <li class="amarillo"><a href="./animaciones/">Animacion CSS</a></li>
                <li class="verde"><a href="./turismo">Responsive</a></li>
                <li class="violeta"><a href="./evaluacion/">Evaluación</a></li>
                <li class="celeste"><a href="./#/">Grid</a></li>
                <li class="amarillo"><a href="./sass/">SASS</a></li>
            </ul>

        </nav>
)
}

export default Nav
