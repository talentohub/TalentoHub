import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import "../css/quienessomos.css";
import logo from "../imagenes/TH.png";

const Quienessomos = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <CarrucelPaginas
          imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697729611/Sin_t%C3%ADtulo-1_1_zzkfbi.png"
        />
      </div>
      
      <div className="main-content">
        <CarrucelPaginas
          imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697724664/Sin_t%C3%ADtulo-2_fcdhze.png"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Quienessomos;
