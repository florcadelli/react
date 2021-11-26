import React from 'react'
import caba from '../../assets/portada-img/caba.png';
import frontend from '../../assets/portada-img/frontend.png';
import florCadelli from '../../assets/portada-img/florCadelli.png';
import photoshop from '../../assets/portada-img/photoshop.png';

const Main = ({props}) => {
return (
    <main className="presentacion">
    <section className="scrabble">
         <div className="flor">
            <div className="sombra">
            <div className="ficha"><p>F<span class="numero">4</span></p></div>
            </div>
            <div className="sombra">
            <div className="ficha"><p>L<span class="numero">1</span></p></div>
            </div>
            <div className="sombra">
            <div className="ficha"><p>O<span class="numero">1</span></p></div>
            </div>
            <div className="sombra r">
            <div className="ficha "><p>R<span class="numero">1</span></p></div>
            </div>
        </div>

        <div className="cadelli">
            <div className="sombra">
            <div className="ficha"><p>C<span class="numero">3</span></p></div>
            </div>
            <div className="sombra">
            <div className="ficha"><p>A<span class="numero">1</span></p></div>
            </div>
            <div className="sombra">
            <div className="ficha"><p>D<span class="numero">2</span></p></div>
            </div>
            <div className="sombra">
            <div className="ficha"><p>E<span class="numero">1</span></p></div>
            </div>
             <div className="sombra">
            <div className="ficha"><p>L<span class="numero">1</span></p></div>
            </div>
            <div className="sombra">
            <div className="ficha"><p>L<span class="numero">1</span></p></div>
            </div>
            <div className="sombra">
            <div className="ficha"><p>I<span class="numero">1</span></p></div>
            </div>  
        </div>   
    </section> 
    
    <section className="recortes">
            <div className="caba"><img src={caba} alt="caba"/></div>
            <div className="frontend"><img src={frontend} alt="frontend developer"/></div>
            <div className="fotoPerfil"><img src={florCadelli} alt="foto perfil"/></div>     
    </section>
    <section className="texto">
            {/* <div class="clip"><img src="img/clip.png" alt="clip"/></div> */}
            <p className="frase">"<span>Elijo el Frontend porque me gusta jugar con el diseño, ser curiosa y tomar riesgos...</span>aquí comparto proyectos desarrollados en react "</p>
            <div className="tecnologias">
                <i className="fas fa-code"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-js-square"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-node-js"></i>
                <i className="fab fa-java"></i>
                <img className="photoshop" src={photoshop} alt="photoshop"/> 
                {/* <!-- <i class="fab fa-figma"></i>     --> */}
                <i className="fab fa-github"></i>
              </div>
    </section>
</main>
)
}

export default Main
