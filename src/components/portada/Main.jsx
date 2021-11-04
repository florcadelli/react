import React from 'react'
import caba from '../../assets/portada-img/caba.png';
import frontend from '../../assets/portada-img/frontend.png';
import florCadelli from '../../assets/portada-img/florCadelli.png';
import photoshop from '../../assets/portada-img/photoshop.png';

const Main = ({props}) => {
return (
    <main class="presentacion">
    <section class="scrabble">
         <div class="flor">
            <div class="sombra">
            <div class="ficha"><p>F<span class="numero">4</span></p></div>
            </div>
            <div class="sombra">
            <div class="ficha"><p>L<span class="numero">1</span></p></div>
            </div>
            <div class="sombra">
            <div class="ficha"><p>O<span class="numero">1</span></p></div>
            </div>
            <div class="sombra r">
            <div class="ficha "><p>R<span class="numero">1</span></p></div>
            </div>
        </div>

        <div class="cadelli">
            <div class="sombra">
            <div class="ficha"><p>C<span class="numero">3</span></p></div>
            </div>
            <div class="sombra">
            <div class="ficha"><p>A<span class="numero">1</span></p></div>
            </div>
            <div class="sombra">
            <div class="ficha"><p>D<span class="numero">2</span></p></div>
            </div>
            <div class="sombra">
            <div class="ficha"><p>E<span class="numero">1</span></p></div>
            </div>
             <div class="sombra">
            <div class="ficha"><p>L<span class="numero">1</span></p></div>
            </div>
            <div class="sombra">
            <div class="ficha"><p>L<span class="numero">1</span></p></div>
            </div>
            <div class="sombra">
            <div class="ficha"><p>I<span class="numero">1</span></p></div>
            </div>  
        </div>   
    </section> 
    
    <section class="recortes">
            <div class="caba"><img src={caba} alt="caba"/></div>
            <div class="frontend"><img src={frontend} alt="frontend developer"/></div>
            <div class="fotoPerfil"><img src={florCadelli} alt="foto perfil"/></div>     
    </section>
    <section class="texto">
            {/* <div class="clip"><img src="img/clip.png" alt="clip"/></div> */}
            <p class="frase">"Elijo el Frontend porque me gusta jugar con el diseño, ser curiosa y tomar riesgos... "</p>
            <div class="tecnologias">
                <i class="fas fa-code"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-react"></i>
                <i class="fab fa-node-js"></i>
                <i class="fab fa-java"></i>
                <img class="photoshop" src={photoshop} alt="photoshop"/> 
                {/* <!-- <i class="fab fa-figma"></i>     --> */}
                <i class="fab fa-github"></i>
              </div>
    </section>
</main>
)
}

export default Main
