import React from 'react'

const Nav = ({props}) => {
return (
        <nav>
            <ul>
                <li class="rosa"><a href="../cv/Cv">Curriculum Vitae</a></li>
                <li class="celeste"><a href="./super-forms">Formularios</a></li>
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
