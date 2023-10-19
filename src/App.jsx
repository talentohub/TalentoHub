import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Paginasweb from "./pages/paginasweb";
import Publicidad from "./pages/publicidad";
import Crecimientodemarca from "./pages/crecimientodemarca";
import Redessociales from "./pages/redessociales";
import Contacto from "./pages/contacto";
import Quienessomos from "./pages/quienessomos"
import "../src/css/index.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/paginasweb" element={<Paginasweb />} />
        <Route path="/publicidad" element={<Publicidad />} />
        <Route path="/crecimientodemarca" element={<Crecimientodemarca />} />
        <Route path="/redessociales" element={<Redessociales />} />
        <Route path="/quienes" element={<Quienessomos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
