import Footer from "../componentes/footer";
import Navbar from "../componentes/navbar";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import Formulario from "../componentes/formulario";
import logo from "../imagenes/TH.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome
import { faFacebook, faLinkedin, faInstagram, faGithub, faWhatsapp,faTiktok } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos de redes sociales
import "../css/Contacto.css";

const Contacto = () => {
  return (
    <>
    <Navbar />
    <CarrucelPaginas
      imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697645715/wepik-export-20231018112627zN6o_cajqf6.png "
    />
    <div className="container contenedorformulario mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-5 mt-5">
          <Formulario />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <img className="logoformulario" src={logo} alt="" />

          <div className="redes-sociales">
            <a href="https://www.facebook.com/talentoHuB.latam/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icono-social" />
            </a>
            <a href="URL_de_Tu_Twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icono-social" />
            </a>
            <a href="URL_de_Tu_Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icono-social" />
            </a>
            <a href="URL_de_Tu_Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icono-social" />
            </a>
            <a href="http://api.whatsapp.com/send?phone=56945111875" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="icono-social" />
            </a>
            <a href="https://www.tiktok.com/@talentohub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="icono-social" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Contacto;