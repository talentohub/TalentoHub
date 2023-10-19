import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin,faGithub,faWhatsapp,faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from "../imagenes/TH.png"
import "../css/footer.css"

const Footer = () => {
  return (
    <>
    <div className="containerfluid bg-black ">
    <footer className="d-flex flex-wrap justify-content-between align-items-center ">
      <p className="hecho col-md-4 mb-0 text-white" style={{ fontFamily: 'Poppins, sans-serif'}}>© 2023 Hecho X TalentoHuB.</p>
  
      <a href="/" id='logo' className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none m-2">
      <img src={logo} alt="Logo" width="90" height="90" />

      </a>
  
      <div className="redes-sociales">
            <a href="https://www.facebook.com/talentoHuB.latam/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icono-social2" />
            </a>
            <a href="https://www.linkedin.com/company/100112914" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icono-social2" />
            </a>
            <a href="https://www.instagram.com/talentohub.la/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icono-social2" />
            </a>
            <a href="https://github.com/talentohub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icono-social2" />
            </a>
            <a href="http://api.whatsapp.com/send?phone=56945111875" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="icono-social2" />
            </a>
            <a href="https://www.tiktok.com/@talentohub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="icono-social2" />
            </a>
          </div>
    </footer>
  </div>
  </>
  )
}

export default Footer