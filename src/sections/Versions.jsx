import React, { useEffect, useState } from "react";
import "../style/Versions.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import linuxContext from "../context/linuxContext.jsx";
import Card from "../components/Card.jsx";
import Search from "../components/Search.jsx";

function Versions() {
  const { version, searchResults } = useContext(linuxContext);

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
        <Search />
        <div className="card-container">
        {
         searchResults === undefined ? version.map((v) => (<Card v={v}/>)) : searchResults.length < 1 ? <h3>Lo sentimos, no tenemos información que coincida con lo que buscas. 🙁</h3> : searchResults.map((v) => (<Card v={v}/>))
        }
        </div>
      </div>
    </section>
  );
}

export default Versions;
