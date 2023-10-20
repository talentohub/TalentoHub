import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

emailjs.init('iEjJ4Hc_tJX5mcHWN');

const Formulario = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    last: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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
          setFormData({
            name: '',
            last: '',
            phone: '',
            email: '',
            message: ''
          });
        },
        (err) => {
          setSubmitting(false);
          alert(JSON.stringify(err));
        }
      );
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-user">
            <FontAwesomeIcon icon={faUser} />
          </i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Tu Nombre"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="fa fa-user">
            <FontAwesomeIcon icon={faUser} />
          </i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Tu Apellido"
          name="last"
          required
          value={formData.last}
          onChange={handleChange}
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
          value={formData.phone}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success" disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default Formulario;
