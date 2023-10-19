
import PropTypes from 'prop-types';

const Cardinfo = ({ imagen, titulo, informacion }) => {
  return (
    <div className="card mb-3" style={{ width: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
           
            <p className="card-text  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bolder', fontSize: '30px', color: 'black' }}">{informacion}</p>
            <h3 className="card-title">{titulo}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


Cardinfo.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  informacion: PropTypes.string.isRequired, 
};

export default Cardinfo;