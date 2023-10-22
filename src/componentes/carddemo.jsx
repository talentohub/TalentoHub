import PropTypes from "prop-types";
import "../css/cardcomponente.css";

const CardDemo = ({ imagen, texto1, texto2, texto3, titulo, enlace }) => {
  return (
    <>
      <a className="enlacecard" href={enlace}>
        <section className="wrapper-new mb-5">
          <div className="card-new" data-effect="zoom-new">
            <button className="card__save-new js-save-new" type="button">
              <i className="fa fa-bookmark"></i>
            </button>
            <div className="card__image-new">
              <img
                src={imagen}
                alt="Short description"
                
              />
            </div>

            <div className="card__header-new"></div>
            <div className="card__body-new">
              <h3
                className="card__name-new"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {titulo}
              </h3>
              <p
                className="card__job-new"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {texto1}
              </p>

              <p
                className="card__job-new2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {texto2}
              </p>
              <p
                className="card__job-new3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {texto3}
              </p>
            </div>
          </div>
        </section>
      </a>
    </>
  );
};

CardDemo.propTypes = {
  imagen: PropTypes.string.isRequired,
  texto1: PropTypes.string,
  texto2: PropTypes.string,
  texto3: PropTypes.string,
  titulo: PropTypes.string,
  enlace: PropTypes.string, // La URL de la página a la que deseas redirigir
};

export default CardDemo;
