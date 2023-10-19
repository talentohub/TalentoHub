
import PropTypes from 'prop-types';



const CarrucelPaginas = ({imagen}) => {
  return (
    <div className="main-content ">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src={imagen}
              className="d-block w-100 "
              alt="First slide"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};
CarrucelPaginas.propTypes = {
    imagen: PropTypes.string.isRequired,  
 
  };

export default CarrucelPaginas;
