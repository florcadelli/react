import React from 'react'
import perfil from '../../assets/cv-img/florCadelli.jpg';


const Cv = ({props}) => {
return (
<div class="cv">

    <div class="container">
      <div class="sidebar">
        <div class="foto-perfil">
          <img src={perfil} alt="Perfil" />
        </div>

        <section>
          <h4>MI PERFIL</h4>
          <p>Desarrolladora Front End - Maquetadora web, con competencias en Full Stack. </p> 
          <p>Creativa. Proactiva.</p>
          <p>Con interés de crecer en el mundo IT.</p>
          <p>Disfruto del trabajo en equipo</p>
        </section>
        <section>
          <h4>SKILLS</h4>
          <p>
            React, HTML, CSS, Javascript, Node Js, Express, Java, MySQL,
            Springboot, POO, Patrón de arquitectura MVC, Sequelize, Hibernate.
          </p>
          <p>Git, Metodologías Ágiles - Scrum, VSCode, IntellyJ.</p>

          <p>Photoshop, Figma</p>
        </section>
        <section>
          <h4>IDIOMAS</h4>
          <p>English beginner</p>
        </section>
        <section>
          <h4>CONTACTO</h4>
          <ul>
            <li>+54 9 11 36427868</li>
            <li>florcadelli@gmail.com</li>
            <li>Buenos Aires - Argentina</li>
            <li>
              <a href="https://github.com/florcadelli"
                >github.com/florcadelli</a
              >
            </li>
            <li>
                <a href="https://www.linkedin.com/in/florencia-cadelli-6b28aa220"
                  >linkedin.com/in/florencia-cadelli</a
                >
              </li>
          </ul>
        </section>
      </div>

      <div class="principal">
        <header>
          <h1>FLORENCIA CADELLI</h1>
          <div class="titulos">
            <h3>FRONT END DEVELOPER - MAQUETADORA WEB</h3>
            <h3>ARTES VISUALES</h3>
            <div class="tecnologias">
              <i class="fas fa-code"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js-square"></i>
              <i class="fab fa-react"></i>
              <i class="fab fa-node-js"></i>
              <i class="fab fa-java"></i>
              {/* <img class="mysql" src="MySQL-logo.png" alt="mysql"/> */}
              
              {/* <!-- <img class="vs" src="visual.png" alt="vs"> --> */}
              {/* <!-- <img class="ij" src="ij.png" alt="ij"> --> */}
              {/* <img class="photoshop" src="photoshop.png" alt="photoshop"/>  */}
              
              {/* <!-- <i class="fab fa-figma"></i>  --> */}
              {/* <!-- <img class="agile" src="agile.png" alt="agile">    --> */}
              <i class="fab fa-github"></i>
            </div>
          </div>
        </header>
       
        <main>
            <section class="experiencia">
                <h4>EXPERIENCIA PROFESIONAL</h4>
                   <article>
                      <h5>Desarolladora Web Full Stack</h5>
                      <h6>Aplicación web ecommerce para la marca "Vistete de poder". | Septiembre 2020 - Marzo 2021 </h6>
                      <ul>
                        <li>Uso de HTML, CSS y Javascript para interacciones y validaciones. </li>
                        <li>Buenas prácticas de hacer sitios responsive.</li>
                        <li>Backend desarrollado en Node, con Express como framework, basado en el patrón MVC.</li>
                        <li>Base de datos relacional con la que interactuamos a través de Sequelize con MySQL.</li>
                        <li>Creación de API rest.</li>
                        <li>Desarrolló siguiendo los lineamientos de Metodologías Ágiles (Scrum).</li>
                        <li>Se gestionó utilizando Git, en un repositorio de trabajo colaborativo y organizado. <a href="https://github.com/florcadelli/E-commerce_VisteteDePoder">github.com/florcadelli/E-commerce_VisteteDePoder</a></li>
                      </ul>
                      
                      <p>Proyecto integrador desarrollado en el marco de Digital House <a href="https://www.digitalhouse.com/">www.digitalhouse.com/</a></p>
                      
                   </article>
                   <article>
                       <h5>Escenógrafa.</h5>
                       <div>
                        <h6>  Diseñadora y realizadora Escenográfica. | 2007-2020 |</h6>
                        <p>  Disney, Pol-ka, Patagonik, Non Stop, Pegsa, etc.</p>
                       </div>
                       
                   </article>
                   <article>
                       <h5>Profesora de Artes Visuales.</h5>
                       <div>
                        <h6>Profesora en educación media. | 2018-2019 |</h6>
                        <p>Escuela de Comercio n° 11. Villa Devoto. Caba.</p>
                       </div>
                      
                   </article>
          </section>         
          <section>
               <h4>FORMACION ACADÉMICA</h4>
               <article>
                <h5>Certified Tech Developer.</h5>
                <div>
                    <h6>En curso | Marzo 2021 - Al presente |</h6>
                <p>Digital House junto a Mercado Libre y Globant. Argentina.</p>
                </div>
               
             </article>
               <article>
                  <h5>Desarrollador Web Full Stack.</h5>
                  <div>
                    <h6>Graduada | Septiembre 2020 - Marzo 2021 |</h6>
                    <p>Digital House. Argentina.</p>
                  </div>
                  
               </article>
               <article>
                  <h5>Artes Plásticas con orientacion en Escenografía.</h5>
                  
                  <div>
                    <h6>Graduada | 2000-2006. | Promedio 8,50 |</h6>
                    <p>Facultad de Bellas Artes. Universidad Nacional de la Plata. Argentina.</p>
                  </div>
                 
               </article>
         </section>
        </main>
    </div>
      </div>
      <footer>
          <div>
            <p>florcadelli@gmail.com</p>
          </div>
          <div>
              <a href="https://www.linkedin.com/in/florencia-cadelli-6b28aa220/"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/florcadelli"><i class="fab fa-github"></i></a>
              <a href="https://www.instagram.com/florcadelli"><i class="fab fa-instagram"></i></a>
            
           
            
            
          </div>
        
    </footer>


</div>
)
}

export default Cv
