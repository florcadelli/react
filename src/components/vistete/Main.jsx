import React from "react";
import alicia from "../../assets/vistete-img/carrucel/1Alicia.jpg";
import cortazar from "../../assets/vistete-img/carrucel/2cortazar.jpg";
import principito from "../../assets/vistete-img/carrucel/3principito.jpg";
import poe from "../../assets/vistete-img/carrucel/4poe.jpg";
import indumentaria from "../../assets/vistete-img/menu-fotos/indumentaria.jpg";
import merchandising from "../../assets/vistete-img/menu-fotos/merchandising.jpg";
import accesorios from "../../assets/vistete-img/menu-fotos/accesorios.jpg";
import uno from "../../assets/vistete-img/carru-productos/1.jpg";
import dos from "../../assets/vistete-img/carru-productos/2.jpg";
import tres from "../../assets/vistete-img/carru-productos/3.jpg";
import cuatro from "../../assets/vistete-img/carru-productos/4.jpg";
import cinco from "../../assets/vistete-img/carru-productos/5.jpg";
import seis from "../../assets/vistete-img/carru-productos/6.jpg";
import siete from "../../assets/vistete-img/carru-productos/7.jpg";
import ocho from "../../assets/vistete-img/carru-productos/8.jpg";
import nueve from "../../assets/vistete-img/carru-productos/9.jpg";
import diez from "../../assets/vistete-img/carru-productos/10.jpg";
import once from "../../assets/vistete-img/carru-productos/11.jpg";
import doce from "../../assets/vistete-img/carru-productos/12.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = ({ props }) => {
  return (
    <main>
      <div class="mainHome">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={alicia} class="d-block w-100" alt="alicia" />
            </div>
            <div class="carousel-item">
              <img src={cortazar} class="d-block w-100" alt="cortazar" />
            </div>
            <div class="carousel-item">
              <img src={principito} class="d-block w-100" alt="principito" />
            </div>
            <div class="carousel-item">
              <img src={poe} class="d-block w-100" alt="poe" />
            </div>
          </div>
        </div>

        <section class="menuFotos">
          <article class="img-container-small">
            <a href="../products/listIndumentaria">
              <img
                class="imagenMenu"
                src={indumentaria}
                alt="Menú con Imagen de Indumentaria"
              />
              <p class="indumentariaLetras">Indumentaria</p>
            </a>
          </article>
          <article class="img-container-small">
            <a href="../products/listMerchandising">
              <img
                class="imagenMenu"
                src={accesorios}
                alt="Menú con Imagen de Accesorios"
              />
              <p class="accesorioLetras">Merchandising</p>
            </a>
          </article>
          <article class="img-container-small">
            <a href="../products/listAccesorios">
              <img
                class="imagenMenu"
                src={merchandising}
                alt="Menú con Imagen de Merchandising"
              />
              <p class="merchanidingLetras">Accesorios</p>
            </a>
          </article>
        </section>

        <section class="slider">
          <article>
            <img src={uno} alt="barridoImagen3" />
          </article>
          <article>
            <img src={dos} alt="barridoImagen3" />
          </article>
          <article>
            <img src={tres} alt="barridoImagen3" />
          </article>
          <article>
            <img src={cuatro} alt="barridoImagen3" />
          </article>
          <article>
            <img src={cinco} alt="barridoImagen3" />
          </article>
          <article>
            <img src={seis} alt="barridoImagen3" />
          </article>
          <article>
            <img src={siete} alt="barridoImagen3" />
          </article>
          <article>
            <img src={ocho} alt="barridoImagen3" />
          </article>
          <article>
            <img src={nueve} alt="barridoImagen3" />
          </article>
          <article>
            <img src={diez} alt="barridoImagen3" />
          </article>
          <article>
            <img src={once} alt="barridoImagen3" />
          </article>
          <article>
            <img src={doce} alt="barridoImagen3" />
          </article>
          <article>
            <img src={uno} alt="barridoImagen3" />
          </article>
          <article>
            <img src={dos} alt="barridoImagen3" />
          </article>
          <article>
            <img src={tres} alt="barridoImagen3" />
          </article>
          <article>
            <img src={cuatro} alt="barridoImagen3" />
          </article>
          <article>
            <img src={cinco} alt="barridoImagen3" />
          </article>
          <article>
            <img src={seis} alt="barridoImagen3" />
          </article>
          <article>
            <img src={siete} alt="barridoImagen3" />
          </article>
          <article>
            <img src={ocho} alt="barridoImagen3" />
          </article>
          <article>
            <img src={nueve} alt="barridoImagen3" />
          </article>
          <article>
            <img src={diez} alt="barridoImagen3" />
          </article>
          <article>
            <img src={once} alt="barridoImagen3" />
          </article>
          <article>
            <img src={doce} alt="barridoImagen3" />
          </article>
          <article>
            <img src={uno} alt="barridoImagen3" />
          </article>
          <article>
            <img src={dos} alt="barridoImagen3" />
          </article>
          <article>
            <img src={tres} alt="barridoImagen3" />
          </article>
          <article>
            <img src={cuatro} alt="barridoImagen3" />
          </article>
          <article>
            <img src={cinco} alt="barridoImagen3" />
          </article>
          <article>
            <img src={seis} alt="barridoImagen3" />
          </article>
          <article>
            <img src={siete} alt="barridoImagen3" />
          </article>
          <article>
            <img src={ocho} alt="barridoImagen3" />
          </article>
          <article>
            <img src={nueve} alt="barridoImagen3" />
          </article>
          <article>
            <img src={diez} alt="barridoImagen3" />
          </article>
          <article>
            <img src={once} alt="barridoImagen3" />
          </article>
          <article>
            <img src={doce} alt="barridoImagen3" />
          </article>
        </section>
      </div>
    </main>
  );
};

export default Main;
