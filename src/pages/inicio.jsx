import "../css/App.css";
import Navbar from "../componentes/navbar";
import CardDemo from "../componentes/carddemo";
import Footer from "../componentes/footer";
import CarruselContactanos from "../componentes/carruselContactanos";
import "../css/inicio.css"
import CarrucelPaginas from "../componentes/carrucelpaginas";



const Inicio = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
       <CarrucelPaginas
       imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697645891/wepik-export-20231018113359pEYI_eyljme.png"/>
        
        
       <div className="Texto text-center mt-5">
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '50px' }}>
        ¿QUÉ SOLUCIONES OFRECEMOS?
      </h1>
      <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 450, fontSize: '30px' }}>
        Queremos que seas el mejor!
      </h5>
      <h5 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400,fontSize: '25px' }}>
        Estamos enfocados en entregar soluciones personalizadas y resultados de calidad.
      </h5>
      </div>
      <br />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 col-lg-3" >
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Web_search-cuate_pumjen.png"
              }
              titulo={"Paginas Web"}
              texto1={
                "Diseñamos sitios web atractivos que cuentan tu historia y fomentan la interacción, adaptándonos a la evolución de tu marca."
              }
              texto2={""}
              enlace={"paginasweb"}
            />
          </div>
          <div className="col-10 col-md-6 col-lg-3">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Marketing_consulting-cuate_rshjbc.png"
              }
              titulo={"Publicidad"}
              texto1={
                "A través de estrategias publicitarias ADS, creamos conexiones significativas que generan clientes y conversiones."
              }
              texto2={""}
              enlace={"publicidad"}
            />
          </div>

          <div className="col-10 col-md-6 col-lg-3">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Growing-cuate_z9snqs.png"
              }
              titulo={"Crecimiento de marca"}
              texto1={
                "Fomentamos el crecimiento auténtico de tu marca, atrayendo seguidores leales y creando experiencias excepcionales."
              }
              texto2={""}
              enlace={"crecimientodemarca"}
            />
          </div>
          <div className="col-10 col-md-6 col-lg-3">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Social_ideas-cuate_yrcaod.png"
              }
              titulo={"Redes Sociales"}
              texto1={
                "En redes sociales, creamos comunidades, conversaciones y embajadores de marca."
              }
              texto2={""}
              enlace={"redessociales"}
            />
          </div>
        </div>
      </div>
      <CarruselContactanos />
      <Footer />
    </>
  );
};

export default Inicio;
