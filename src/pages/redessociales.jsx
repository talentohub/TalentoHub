import Navbar from "../componentes/navbar";
import CardLargas from "../componentes/cardlargas";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import { useDarkMode } from "../context/DarkModeContext";
import TextAnimation from "../componentes/textanimation";



const Redessociales = () => {

  const { isDarkMode } = useDarkMode();
  const imagenClaro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698079576/9_a8c2an.png'; // Reemplaza con la ruta correcta
  const imagenOscuro = 'https://res.cloudinary.com/diiuqfujg/image/upload/v1698152724/10_kxutky.png'; // Reemplaza con la ruta correcta
 

  return (
    <>
     <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar />
      <CarrucelPaginas imagenClaro={imagenClaro} imagenOscuro={imagenOscuro} />
      <div className="main-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697404365/Online_world-bro_okywew.png"
                }
                titulo={"Plan Básico"}
                informacion={[
                  "• Creación y optimización de perfiles en las principales redes sociales ",
                  "• Desarrollo de una estrategia de contenido inicial ",
                  "• Publicación regular y programada en las redes sociales ",
                  "• Interacción básica con seguidores ",
                  "• Informe mensual de rendimiento ",
                  // Puedes agregar más información si es necesario
                ]}
                botoninfo={"WhatsApp"}
                referencia={"http://api.whatsapp.com/send?phone=56945111875"}
              />
            </div>
            <div className="col-10 col-md-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Social_Growth-cuate_odloga.png"
                }
                titulo={"Plan Premium"}
                informacion={[
                  "• Creación y optimización de perfiles en las principales redes sociales ",
                  "• Desarrollo y ejecución de una estrategia de contenido avanzada ",
                  "• Publicación regular y estratégica para maximizar el alcance ",
                  "• Interacción activa con seguidores, gestión de comentarios y mensajes directos ",
                  "• Gestión de anuncios en redes sociales ",
                  "• Informe detallado de rendimiento con recomendaciones para la mejora continua ",
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
<TextAnimation />
      <Footer />
      </div>
    </>
  );
};

export default Redessociales;
