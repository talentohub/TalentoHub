import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import "../css/quienessomos.css";
import TextAnimation from "../componentes/textanimation";
import Carddemo from "../componentes/carddemo";
import { useDarkMode } from "../context/DarkModeContext";

const Quienessomos = () => {

  const { isDarkMode } = useDarkMode();
  const imagenClaro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698078511/2_jxulps.png'; // Reemplaza con la ruta correcta
  const imagenOscuro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698078511/1_e0gbdf.png'; // Reemplaza con la ruta correcta

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <div className="main-container">
      <Navbar />

      <div className="main-content">
      <CarrucelPaginas imagenClaro={imagenClaro} imagenOscuro={imagenOscuro} />
      </div>

      <TextAnimation />

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
          <h1 className="custom-heading">TalentoHuB</h1>
          <h3 className="centered-text">Somos un Equipo Apasionado de <strong>desarrolladores</strong>, <strong>diseñadores</strong> y <strong>expertos en marketing</strong>. No solo creamos <strong>Soluciones innovadoras</strong>, también construimos conexiones significativas. Únete a nuestra comunidad, donde tu visión se convierte en nuestra inspiración.</h3>


          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6 ">
              <Carddemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697838185/tito_yh7flr.png "
              }
            
              texto2={
                "Co/Fundador Talento Hub"
              }
              texto3={
                "Héctor Silva"
              }
              enlace={"javascript:void(0)" }
             
            />
              </div>
              <div className="col-6 ">
              <Carddemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697838185/paz_armpwu.png "
              }
            
              texto2={
                "Co/Fundadora Talento Hub"
              }
              texto3={
                "Paz Valenzuela"
              }
              enlace={"javascript:void(0)" }
            />
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
      </div>
  );
};

export default Quienessomos;
