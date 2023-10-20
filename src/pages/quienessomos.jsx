import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import "../css/quienessomos.css";
import TextAnimation from "../componentes/textanimation";


const Quienessomos = () => {
  return (
    <div className="main-container">
      <Navbar />

      <div className="main-content">
        <CarrucelPaginas
          imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697769543/Sin_t%C3%ADtulo-1_3_ycts0g.png"
        />
      </div>
      
      <div className="main-content">
        <CarrucelPaginas
          imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697736311/wepik-export-20231019172444sPod_qdp7nn.png"
        />
      </div>
<TextAnimation/>

      <Footer />
    </div>
  );
}

export default Quienessomos;