import React from "react";

import headerVistete from "../../styles/__headerVistete.css";
import facebook from '../../assets/vistete-img/facebook.png';
import instagram from '../../assets/vistete-img/instagram.png';
import whatsapp from '../../assets/vistete-img/whatsapp.png';
import logo from '../../assets/vistete-img/Logo.png';

const Header = ({ props }) => {
  return (
    // <!--HEADER-->
    <header className="header-vistete">
      <section className="header1">
        <div className="envios">
          <i className="fas fa-shipping-fast"></i>
           Envios a todo el país
        </div>

        <div className="redes">
          <div className="f">
            <a href="https://www.facebook.com/vistetedepoderclothingdesign/">
              <img className="f" src={facebook} alt="facebook" />
            </a>
          </div>
          <div className="i">
            <a href="https://www.instagram.com/remerasliterarias_vp/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="w">
            <a href="https://api.whatsapp.com/send?phone=5491157062866&text=Hola!%20Me%20gustaria%20mas%20informacion%20sobre%20">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </section>

      <section className="header2">
        <article className="logo">
          <img src={logo} alt="logo" />
        </article>
        <nav>
          <ul className="menuHorizontal">
            <li className="palabras">
              <a className="home" href="/home">
                HOME
              </a>
            </li>
            <li className="palabras">
              <a className="home" href="../products/listIndumentaria">
                INDUMENTARIA<i className="fas fa-sort-down"></i>
              </a>
              <ul className="desplegable">
                {/* <!-- <li><a href="../products/Tshirt">Remeras</a></li> --> */}
                <li>
                  <a href="../products/Tshirt">Remeras</a>
                </li>
                <li>
                  <a href="../products/masc">Barbijos</a>
                </li>
                <li>
                  <a href="../products/cap">Gorras</a>
                </li>
              </ul>
            </li>
            <li className="palabras">
              <a class="home" href="../products/listMerchandising">
                MERCHANDISING<i className="fas fa-sort-down"></i>
              </a>
              <ul className="desplegable">
                <li>
                  <a href="../products/cup">Tazas</a>
                </li>
                <li>
                  <a href="../products/thermo">Termos</a>
                </li>
                <li>
                  <a href="../products/bottle">Botellas</a>
                </li>
              </ul>
            </li>
            <li className="palabras">
              <a class="home" href="../products/listAccesorios">
                ACCESORIOS<i className="fas fa-sort-down"></i>
              </a>
              <ul className="desplegable">
                <li>
                  <a href="../products/handbag">Bolsos</a>
                </li>
                <li>
                  <a href="../products/pencilCase">Cartucheras</a>
                </li>
                <li>
                  <a href="../products/backpack">Mochilas</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="hamburguesa">
            <i className="fas fa-bars">
              <ul className="desplegable2">
                <li>
                  <a href="../products/Tshirt">Remeras</a>
                </li>
                <li>
                  <a href="../products/masc">Barbijos</a>
                </li>
                <li>
                  <a href="../products/cap">Gorras</a>
                </li>
                <li>
                  <a href="../products/cup">Tazas</a>
                </li>
                <li>
                  <a href="../products/thermo">Termos</a>
                </li>
                <li>
                  <a href="../products/bottle">Botellas</a>
                </li>
                <li>
                  <a href="../products/handbag">Bolsos</a>
                </li>
                <li>
                  <a href="../products/pencilCase">Cartucheras</a>
                </li>
                <li>
                  <a href="../products/backpack">Mochilas</a>
                </li>
              </ul>
            </i>
          </div>
        </nav>

        <div className="buscadores">
          <div className="valija">
            <a href="/carrito">
              <i className="fas fa-shopping-bag"></i>
            </a>
          </div>
          {/* 
            <div class="buscador">
                <form class="formularioBuscador"action="/products/search" method="post" target="_blank">
                    <p class="pBuscador">

                        <label class="labelBuscador"for="busqueda"><i class="fas fa-search"></i></label>

                        <input class="escribir" type="search" name="busqueda"
                            placeholder="Nombre producto">

                        <input class="enviar" type="submit" value="Buscar">

                    </p>
                </form>
            </div> */}

          <div className="ingreso">
            <a className="home" href="/users/ingreso">
              <i class="fas fa-user"></i>
            </a>

            <ul className="desplegableUsuarios">
              <li>
                <a href="../users/ingreso">Iniciar Sesion</a>
              </li>
              <li>
                <a href="../users/registro">Registrarme</a>
              </li>
              <li>
                <a href="/users/logout">Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
