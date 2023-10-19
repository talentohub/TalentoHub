import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import "../css/quienessomos.css";
import CarruselContactanos from "../componentes/carruselContactanos";
import logo from "../imagenes/TH.png";

const Quienessomos = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <CarrucelPaginas
          imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697645713/wepik-export-20231018160745yGpU_nq2vsq.png"
        />
      </div>
      <div className="spacer">
        <img src={logo} alt="Logo" className="logoextra" />
      </div>
      <CarruselContactanos />
      <Footer />
    </div>
  );
}

export default Quienessomos;
