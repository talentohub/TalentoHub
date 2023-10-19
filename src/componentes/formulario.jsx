
import { useState } from 'react';
import emailjs from "emailjs-com";
emailjs.init('iEjJ4Hc_tJX5mcHWN')
import "../css/formulario.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faPhone,faEnvelope,faComment } from '@fortawesome/free-solid-svg-icons';


const Formulario = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const serviceID = 'default_service';
    const templateID = 'template_7oby6je';

    emailjs.sendForm(serviceID, templateID, e.target)
      .then(
        () => {
          setSubmitting(false);
          alert('Mensaje Enviado Correctamente');
        },
        (err) => {
          setSubmitting(false);
          alert(JSON.stringify(err));
        }
      );
  };
  
    return (
        <>
      <form id="form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-user"><FontAwesomeIcon icon={faUser} /></i> 
          </span>
          
          <input
            type="text"
            className="form-control"
            placeholder="Tu Nombre"
            name="name"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-user"><FontAwesomeIcon icon={faUser} /></i> 
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Tu Apellido"
            name="last"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faPhone} /> 
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Tu Numero de Contacto"
            name="phone"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faEnvelope} /> 
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="Tu Correo Electronico"
            aria-describedby="emailHelp"
            name="email"
            required
          />
          
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faComment} />
          </span>
          <textarea
            className="form-control"
            placeholder="Tu Mensaje"
            rows="3"
            name="message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success" disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar'}
      </button>
       
      </form>
      
    </>
  );
};

export default Formulario;
