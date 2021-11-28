import React from "react";

import footerVistete from "../../styles/__footerVistete.css";
import mercadoPago from "../../assets/vistete-img/logo-mercadopago.jpg";
import correoArgentino from "../../assets/vistete-img/logo-correoargentino.jpg";

const Footer = ({ props }) => {
  return (
    <footer className="footer-vistete">
  
      <div class="info">
        <section className="Menu-del-footer">
          <div className="botonContacto">
            Contacto
            <article className="infoContacto">
              <p>
                <i className="fas fa-phone-square-alt"></i> 011 2587-2610 <br />
                <i className="fas fa-envelope"></i>vistetedepoder@gmail.com{" "}
                <br />
                Horario de atención:Lu a Sa de 9 a 16:30 hs.
              </p>
            </article>
          </div>
          <div className="botonCompra">
        
            Como comprar
            <article className="infoCompra">
              <p>
              
                Elegí el producto que quieras comprar, hacé clic en el botón de
                «Agregar al carrito» Hacé clic en «Iniciar Compra». Completa tus
                datos de contacto e ingresá la dirección a donde queres recibir
                el producto. Te enviaremos por email nuestro CBU para hacer
                una transferencia bancaria.Una vez acreditado el pago, haremos
                el envío correspondiente.
              </p>
            </article>
          </div>
          <div className="botonCambio">
            
            Politica de cambio
            <article className="infoCambio">
              <p>
                Una vez efectuada la compra y recibido el producto, podrás
                realizar el cambio dentro de los próximos 30 días.
              </p>
              <p>
    
                Una vez que pase ese período VISTETE DE PODER se reserva el
                derecho de cambio.
              </p>
            </article>
          </div>
          <div className="botonNosotros">
       
            Nosotros
            <article className="infoNosotros">
              <p>
                Somos una empresa dedicada a la impresion en serigrafía de forma
                artesanal. Trabajamos con diseños originales basados en la
                literatura contemporanea, con fotos de nuestros autores
                favoritos, frases celebres, personajes de cuentos y novelas.
              </p>
            </article>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
