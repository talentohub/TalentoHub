
import { useDarkMode } from "../context/DarkModeContext";
import "../css/carrucelcontactanos.css";
import BotonMagico from "../componentes/botonmagico";
import PropTypes from 'prop-types';
const CarruselContactanos = ({ imagenClaro2, imagenOscuro2 }) => {
  const { isDarkMode } = useDarkMode();

  const imagen = isDarkMode ? imagenOscuro2 : imagenClaro2;
  return (
    <>
      <div id="carouselContactanos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src={imagen}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-content">
              <BotonMagico />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
CarruselContactanos.propTypes = {
  imagenClaro2: PropTypes.string.isRequired,
  imagenOscuro2: PropTypes.string.isRequired,
};

export default CarruselContactanos;
