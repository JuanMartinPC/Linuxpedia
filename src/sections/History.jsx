import React from "react";
import penguin from "../img/penguin.png";
import "../style/History.css";

function History() {
  return (
    <section id="historia">
      <div className="section-container">
        <img className="section-image" src={penguin} alt="Mascota de Linux" />
        <div className="text-container">
          <h2>HISTORIA</h2>
          <p>
            Linux es un sistema operativo de código abierto creado por Linus
            Torvalds en 1991. Inspirado en UNIX, Linux se ha convertido en la
            base de numerosas distribuciones, como Ubuntu y Fedora. Su filosofía
            de software libre ha fomentado una comunidad activa de
            desarrolladores y usuarios, convirtiéndolo en una poderosa
            alternativa en el mundo de la informática.
          </p>
        </div>
      </div>
    </section>
  );
}

export default History;
