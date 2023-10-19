import "../css/carrucelcontactanos.css";
import BotonMagico from "../componentes/botonmagico";

const CarruselContactanos = () => {
  return (
    <>
      <div id="carouselContactanos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://res.cloudinary.com/dcwloh062/image/upload/v1697736375/wepik-export-20231019172050Mjn6_cwayqj.png"
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
