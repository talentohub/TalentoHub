import "../css/botonmagico.css"

import { Link } from 'react-router-dom';


const Botonmagico = () => {
  return (
    <Link to="/contacto" className="botonmagico" style={{ fontFamily: "'Poppins', sans-serif" }}>
      Contactanos
    </Link>
  );
};


export default Botonmagico