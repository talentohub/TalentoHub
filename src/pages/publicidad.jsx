import Navbar from "../componentes/navbar";

import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import CardLargas from "../componentes/cardlargas";
import CarruselContactanos from "../componentes/carruselContactanos";

import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";

const Publicidad = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
      
      <CarrucelPaginas
     imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697560376/Puandmar_enr1bo.png"/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-md-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/brand_loyalty-pana_tlithf.png"
                }
                titulo={"Plan Basico"}
                informacion={[
                  "• Investigación básica de palabras clave para la industria",
                  "• Creación y gestión de una campaña en una plataforma de publicidad (Google Ads o Facebook Ads)",
                  "• Análisis de Resultados: Informe mensual de rendimiento",
                  // Agrega más información si es necesario
                ]}
                botoninfo={"WhatsApp"}
                referencia={"http://api.whatsapp.com/send?phone=56945111875"}
              />
            </div>
            <div className="col-11 col-md-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Holding_the_arrow-rafiki_kmsmef.png"
                }
                titulo={"Plan Estandar"}
                informacion={[
                  "• Investigación avanzada de palabras clave y análisis de competencia",
                  "• Creación y gestión de dos campañas en plataformas de publicidad seleccionadas",
                  "• Diseño de anuncios creativos y segmentación de audiencia",
                  "• Informe quincenal de rendimiento y ajuste de estrategias según los resultados",
                  // Puedes agregar más información si es necesario
                ]}
                botoninfo={"WhatsApp"}
                referencia={"http://api.whatsapp.com/send?phone=56945111875"}
              />
            </div>
            <div className="col-11 col-md-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Success_factors-amico_zfmein.png"
                }
                titulo={"Plan Premium"}
                informacion={[
                  "• Investigación exhaustiva de palabras clave y análisis detallado de la competencia ",
                  "• Creación y gestión de tres campañas en varias plataformas de publicidad ",
                  "• Diseño de anuncios altamente creativos y personalizados ",
                  "• Implementación de estrategias de retargeting y ajuste constante de la campaña ",
                  "• Informe semanal de rendimiento con reuniones de consultoría para discutir estrategias futuras ",
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
        imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697458202/wepik-export-20231016115840HNzB_ub8prt.png"
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

<CarruselContactanos />
      <Footer />
    </>
  );
};

export default Publicidad;
