import "../css/carrucelcontactanos.css";
import BotonMagico from "../componentes/botonmagico";

const CarruselContactanos = () => {
  return (
    <>
      <div id="carouselContactanos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://res.cloudinary.com/dcwloh062/image/upload/v1697420092/wepik-export-20231016013230FczD_ecooor.png"
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

export default CarruselContactanos;
