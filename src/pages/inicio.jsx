import "../css/App.css";
import Navbar from "../componentes/navbar";
import CardDemo from "../componentes/carddemo";
import Footer from "../componentes/footer";
import CarruselContactanos from "../componentes/carruselContactanos";
import "../css/inicio.css";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import { useDarkMode } from "../context/DarkModeContext";

import "../css/modooscuro.css"

const Inicio = () => {
  const { isDarkMode } = useDarkMode();
  const imagenClaro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698080312/2_y53pb3.png'; // Reemplaza con la ruta correcta
  const imagenOscuro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698080312/1_e2mwt7.png'; // Reemplaza con la ruta correcta
  const imagenClaro2= 'https://res.cloudinary.com/dcwloh062/image/upload/v1698080643/4_sh2c7z.png'; // Reemplaza con la ruta correcta
  const imagenOscuro2 = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698080643/3_ue2gw6.png'; // Reemplaza con la ruta correcta


  return (
    <>

      <Navbar />

      <div className={`main-content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>  
      <CarrucelPaginas imagenClaro={imagenClaro} imagenOscuro={imagenOscuro} />

        <div className="Texto text-center mt-5 " >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
            ¿QUÉ SOLUCIONES OFRECEMOS?
          </h1>
          <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 450 }}>
            Queremos que seas el mejor!
          </h5>
          <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            Estamos enfocados en entregar soluciones personalizadas y resultados de calidad.
          </h5>
        </div>
        <br />
      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-6 col-lg-3">
              <CardDemo
                imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Web_search-cuate_pumjen.png"
                titulo={"Paginas Web"}
                texto1={
                  "Diseñamos sitios web atractivos que cuentan tu historia y fomentan la interacción, adaptándonos a la evolución de tu marca."
                }
                enlace={"paginasweb"}
              />
            </div>
            
            <div className="col-10 col-md-6 col-lg-3">
              <CardDemo
                imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Marketing_consulting-cuate_rshjbc.png"
                titulo={"Publicidad"}
                texto1={
                  "A través de estrategias publicitarias ADS, creamos conexiones significativas que generan clientes y conversiones."
                }
                enlace={"publicidad"}
              />
            </div>
            <div className="col-10 col-md-6 col-lg-3">
              <CardDemo
                imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Growing-cuate_z9snqs.png"
                titulo={"Crecimiento"}
                texto1={
                  "Fomentamos el crecimiento auténtico de tu marca, atrayendo seguidores leales y creando experiencias excepcionales."
                }
                enlace={"crecimientodemarca"}
              />
            </div>
            <div className="col-10 col-md-6 col-lg-3">
              <CardDemo
                imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Social_ideas-cuate_yrcaod.png"
                titulo={"Redes Sociales"}
                texto1={
                  "En redes sociales, creamos comunidades, conversaciones y embajadores de marca."
                }
                enlace={"redessociales"}
              />
            </div>
          </div>
        </div>
        <CarruselContactanos
        imagenClaro2={imagenClaro2} imagenOscuro2={imagenOscuro2}
         />
        <Footer />
      </div>
   
    </>
  );
};

export default Inicio;
