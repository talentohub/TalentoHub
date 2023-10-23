import Navbar from "../componentes/navbar";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import CarruselContactanos from "../componentes/carruselContactanos";
import Footer from "../componentes/footer";
import CardLargas from "../componentes/cardlargas";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import { useDarkMode } from "../context/DarkModeContext";

const Paginasweb = () => {

  const { isDarkMode } = useDarkMode();
  const imagenClaro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698079572/3_bcnv5w.png'; // Reemplaza con la ruta correcta
  const imagenOscuro = 'https://res.cloudinary.com/dcwloh062/image/upload/v1698079572/4_txa7es.png'; // Reemplaza con la ruta correcta

  return (
    <>
     <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar />
      <div className="main-content">
      <CarrucelPaginas imagenClaro={imagenClaro} imagenOscuro={imagenOscuro} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-4 ">
            <Cardconbotones
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Website_Creator-rafiki_ksaky1.png"
              }
              titulo={"Plan Básico"}
              informacion={[
                "• Creación de una página web atractiva y funcional ",
                "• Menú adaptable ",
                "• Información de la empresa o proyecto ",
                "• Formulario de contacto ",
                "• Vinculación con redes sociales ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año ",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! ",
              ]}
              botoninfo={"Hablemos por WhatsApp "}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
          </div>
          <div className="col-11 col-lg-4 ">
            <Cardconbotones
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Online_wishes_list-rafiki_vgclwr.png"
              }
              titulo={"Plan Estandar"}
              informacion={[
                "• Creación de una tienda online atractiva y profesional ",
                "• Carrito de compras ",
                "• Catálogo de productos con descripciones detalladas ",
                "• Proceso de pago seguro ",
                "• Gestión de inventario ",
                "• Integración con pasarelas de pago",
                "• Vinculación con redes sociales ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año ",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! ",

                // Agrega más información si es necesario
              ]}
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
          </div>
          
          <div className="col-11 col-lg-4">
            <Cardconbotones
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Rocket-rafiki_zdoec3.png"
              }
              titulo={"Plan Premium"}
              informacion={[
                "• Creación de una página web completa con tienda online ",
                "• Todas las características del servicio de página web y e-commerce empresa",
                "• Proceso de pago seguro con múltiples opciones ",
                "• Integración con pasarelas de pago y redes sociales ",
                "• Estrategias de marketing para la tienda online ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año .",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! ",

                // Agrega más información si es necesario
              ]}
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
          </div>
        </div>
<div className="container ">
  <div className="row " >
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
</div>

      <Footer />
      </div>
    </>
  );
};

export default Paginasweb;
