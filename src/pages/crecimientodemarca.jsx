import Navbar from "../componentes/navbar";

import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import CardLargas from "../componentes/cardlargas";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import CarruselContactanos from "../componentes/carruselContactanos";
import { useDarkMode } from "../context/DarkModeContext";

const Crecimientodemarca = () => {

  const { isDarkMode } = useDarkMode();
  const imagenClaro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1697838185/tito_yh7flr.png'; // Reemplaza con la ruta correcta
  const imagenOscuro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1697838185/paz_armpwu.png'; // Reemplaza con la ruta correcta
  const imagenClaro2= 'https://res.cloudinary.com/dcwloh062/image/upload/v1697736375/wepik-export-20231019172050Mjn6_cwayqj.png'; // Reemplaza con la ruta correcta
  const imagenOscuro2 = 'https://res.cloudinary.com/dcwloh062/image/upload/v1697838185/paz_armpwu.png'; // Reemplaza con la ruta correcta

  return (
    <>
     <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar />
      <div className="main-content">
      <CarrucelPaginas imagenClaro={imagenClaro} imagenOscuro={imagenOscuro} />
      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-md-4">
            <Cardconbotones
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Internet_on_the_go-amico_ctkuim.png"}
              titulo={"Plan Básico"}
              informacion={[
                "• Creación y desarrollo de la identidad visual de la marca ",
                "• Desarrollo de una estrategia básica de marketing digital ",
                "• Creación de contenido relevante y atractivo para la marca ",
                "• Establecimiento de presencia en redes sociales ",
                "• Análisis básico de la competencia ",
                // Puedes agregar más información si es necesario
              ]}
              
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
            </div>
            <div className="col-11 col-md-4">
            <Cardconbotones
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Next_option-rafiki_wkmcjg.png"}
              titulo={"Plan Premium"}
              informacion={[
                "• Desarrollo completo de la identidad visual, tono de marca y mensaje ",
                "• Desarrollo e implementación de una estrategia completa de marketing digital ",
                "• Creación de contenido creativo y altamente atractivo para la marca ",
                "• Gestión avanzada y potenciada de la presencia en redes sociales ",
                "• Análisis profundo de la competencia y del mercado ",
                "• Desarrollo de campañas especiales para eventos clave ",
                // Puedes agregar más información si es necesario
              ]}
              
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
            </div>
          
          </div>
        </div>
     
      </div>
      <div className="container">
  <div className="row" >
    <div className="col-12 mb-4">
      <CardLargas
        imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697937187/lll_yjyogh.png"
        texto1={"En la fase de diseño y desarrollo, nuestros creativos toman la iniciativa para dar vida al proyecto, fusionando la creatividad con la funcionalidad. Nos esforzamos por superar tus expectativas, personalizando cada aspecto según tus requisitos para asegurar un producto verdaderamente único"}
      />
    </div>
    <div className="col-12 mb-4" >
      <CardLargas
        imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697557430/wepik-export-20231016120822H2bc_subkpz.png"}
        texto1={"Nuestro equipo altamente cualificado lleva a cabo la implementación del proyecto, ajustándose a la planificación estratégica inicial. Cada detalle se perfecciona cuidadosamente para garantizar que el resultado final cumpla con tus expectativas y necesidades específicas."}
      />
    </div>
    <div className="col-12 mb-4">
      <CardLargas
        imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697458207/wepik-export-202310161149598ypy_hgk9ku.png"}
        texto1={"En el corazón de nuestro compromiso está la entrega de un proyecto completamente funcional. Los desarrolladores de TalentoHuB se aseguran de que cada aspecto del proyecto esté operativo, respaldado por evaluaciones previas exhaustivas para garantizar su correcto funcionamiento y tu satisfacción total"}
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

export default Crecimientodemarca
