import Footer from "../componentes/footer";
import Navbar from "../componentes/navbar";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import Formulario from "../componentes/formulario";
import logo from "../imagenes/TH.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome
import { faFacebook, faLinkedin, faInstagram, faGithub, faWhatsapp,faTiktok } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos de redes sociales
import "../css/formulario.css"
import { useDarkMode } from "../context/DarkModeContext";


const Contacto = () => {

  const { isDarkMode } = useDarkMode();
  const imagenClaro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698079578/12_iwrqzk.png'; // Reemplaza con la ruta correcta
  const imagenOscuro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698079577/11_cptixl.png'; // Reemplaza con la ruta correcta



  return (
    <>
     <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <Navbar />
    <CarrucelPaginas imagenClaro={imagenClaro} imagenOscuro={imagenOscuro} />
    <div className="container contenedorformulario mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-5 mt-5">
          <Formulario />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <img className="logoformulario" src={logo} alt="" />

          <div className="redes-sociales">
            <a href="https://www.facebook.com/talentoHuB.latam/" target="_blank" rel="noopener noreferrer" >
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
    </div>
  </>
  );
};

export default Contacto;