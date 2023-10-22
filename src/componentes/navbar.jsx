import "../css/navbar.css";
import TH from "../imagenes/TH.png";
import "../css/botonoscuro.css"
import Botonooscuro from "../componentes/botonooscuro"
import { useDarkMode } from "../context/DarkModeContext";


const Navbar = () => {
  const { isDarkMode } = useDarkMode();
 
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="inicio">
            <div className="logo">
              <img className="logo-img" src={TH} alt="Logo" />
            </div>
          </a>
          <button
            className={`navbar-toggler ${isDarkMode ? 'navbar-toggler-dark' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isDarkMode ? 'navbar-collapse-dark' : ''}`} id="navbarSupportedContent">
         
          <ul className="navbar-nav ms-auto"style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="quienes"
                >
                  ¿Quiénes Somos?
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="paginasweb"
                >
                  Desarrollo Web
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="publicidad"
                  
                >
                  Publicidad
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="crecimientodemarca"
                >
                  Crecimiento
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="redessociales"
                >
                  rrss
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contacto"
                  
                >
                  Contacto
                </a>
              </li>
              <Botonooscuro/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
