import PropTypes from 'prop-types';
import { useDarkMode } from '../context/DarkModeContext';

const CarrucelPaginas = ({ imagenClaro, imagenOscuro }) => {
  const { isDarkMode } = useDarkMode();

  const imagen = isDarkMode ? imagenOscuro : imagenClaro;

  return (
    <div className="main-content">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src={imagen}
              className="d-block w-100"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CarrucelPaginas.propTypes = {
  imagenClaro: PropTypes.string.isRequired, // Imagen para modo claro
  imagenOscuro: PropTypes.string.isRequired, // Imagen para modo oscuro
};

export default CarrucelPaginas;
