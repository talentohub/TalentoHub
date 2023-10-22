import PropTypes from "prop-types";
import "../css/cardconbotones.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { useDarkMode } from '../context/DarkModeContext'
const Cardconbotones = ({
  imagen,
  titulo,
  informacion,
  referencia,
  
}) => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
       <div className={`card border border-0 d-flex flex-column align-items-center mt-5 ${isDarkMode ? 'dark-mode' : ''}`}>
        <img src={imagen} className="card-img-top border border-0 " alt="..." style={{ maxWidth: "60%" }}/>
        <div className="card-body border border-0 d-flex flex-column justify-content-between">
          <h3 className="card-title text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bolder', fontSize: '30px'}}>{titulo}</h3>
          {informacion.map((info, index) => (
           <p key={index} className="card-text" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px',textAlign:"center" }}>
           {info}
         </p>
          ))}
<a href={referencia} className="whatsapp-button">
  <div className="whatsapp-content">
    <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    <span  style={{ fontFamily: 'Poppins, sans-serif',  fontSize: '30px', color: 'black' }}>Hablemos</span>
  </div>
</a>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

Cardconbotones.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  informacion: PropTypes.arrayOf(PropTypes.string).isRequired,
  botoninfo: PropTypes.string.isRequired,
  referencia: PropTypes.string.isRequired,
 
};

export default Cardconbotones;
