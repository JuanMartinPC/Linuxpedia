import React from "react";
import "../style/Versions.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import linuxContext from "../context/linuxContext.jsx";
import Card from "../components/Card.jsx";

function Versions() {
  const { version } = useContext(linuxContext);

  const checkToken = (e) => {
    const token = localStorage.getItem('token')
    if (!token){
      e.preventDefault()
      alert('Inicia sesión para aportar contenido.')
    }
  }

  return (
    <section id="versions" className="versions">
      <div>
        <h2>DIVERSIDAD DE DISTRIBUCIONES</h2>
        <p>
          Existen numerosas distribuciones de Linux, cada una adaptada para
          diferentes propósitos y preferencias.
          <br />
          Desde distribuciones de propósito general como Ubuntu, hasta
          distribuciones especializadas como Kali Linux para seguridad,
          <br />
          la diversidad permite a los usuarios seleccionar la distribución que
          mejor se ajuste a sus necesidades.
        </p>
        <Link to='/add'>
        <a href="#" class="ov-btn-grow-box" onClick={checkToken}>CREAR</a>
        </Link>

        <div className="card-container">
        {
          version.map((v) => (<Card v={v}/>))
        }
        </div>
      </div>
    </section>
  );
}

export default Versions;
