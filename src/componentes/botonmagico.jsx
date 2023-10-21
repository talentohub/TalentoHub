import "../css/botonmagico.css"

import { Link } from 'react-router-dom';


const Botonmagico = () => {
  return (
    <Link to="/contacto" className="botonmagico" style={{ fontFamily: "'Poppins', sans-serif" }}>
      Contáctanos
    </Link>
  );
};


export default Botonmagico