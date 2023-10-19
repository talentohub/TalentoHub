import PropTypes from 'prop-types';
import '../css/cardcomponente.css';

const CardDemo = ({ imagen,  texto1, texto2, titulo, enlace }) => {
  return (
    <>
    <a className='enlacecard' href={enlace}>
    <section className="wrapper-new mb-5">
      <div className="card-new" data-effect="zoom-new">
      
          <button className="card__save-new js-save-new" type="button">
            <i className="fa fa-bookmark"></i>
          </button>
          <figure className="card__image-new">
            
            <img src={imagen} alt="Short description" />
            
          </figure>
         
         
        <div className="card__header-new"></div>
        <div className="card__body-new">
          <h3 className="card__name-new"  style={{ fontFamily: 'Poppins, sans-serif',  fontSize: '25px', color: 'black' }}>{titulo}</h3>
          <p className="card__job-new" >{texto1}</p>
          <p className="card__bio-new" style={{ fontFamily: 'Poppins, sans-serif'}}>{texto2}.</p>
        
        </div>
      </div>
    </section>
     </a>
     </>
  );
}

CardDemo.propTypes = {
  imagen: PropTypes.string.isRequired,  
  texto1: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  enlace: PropTypes.string.isRequired, // La URL de la página a la que deseas redirigir
};

export default CardDemo;
