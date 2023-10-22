import { useDarkMode } from '../context/DarkModeContext'; // Ajusta la ruta al archivo de contexto
import "../css/botonoscuro.css"

const Botonooscuro = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
<button className={`botonoscuro${isDarkMode ? ' dark-mode' : ''}`} onClick={toggleDarkMode}>
<div className="sun-moon">
  <div className="stars">
    <span className="star star--1"></span>
    <span className="star star--2"></span>
    <span className="star star--3"></span>
  </div>
</div>
</button>

    </div>
  )
}

export default Botonooscuro
