import PropTypes from 'prop-types';
import '../css/CardLargas.css';

const CardLargas = ({ imagen, texto1 }) => {
  return (
    <div className="container">
      <div className="cardLarga">
        <img src={imagen} alt="Short description" />
        <div className="additional-text">
          
          <p>{texto1}</p>
        </div>
      </div>
    </div>
  );
}

CardLargas.propTypes = {
  imagen: PropTypes.string.isRequired,
 
  texto1: PropTypes.string.isRequired,
};

export default CardLargas;