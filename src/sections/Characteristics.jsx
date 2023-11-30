import React from "react";
import penguin from "../img/penguin.png";
import "../style/History.css";

function Characteristics() {
  return (
    <section id="caracteristicas">
      <div className="section-container-char">
        <div className="text-container-char">
          <h2>CARACTERÍSTICAS</h2>
          <p>
            - Código Abierto: su código fuente está disponible para el público.
            Esto permite que usuarios y desarrolladores lo estudien, modifiquen
            y distribuyan libremente, fomentando una comunidad activa y
            colaborativa.
            <br />
            <br />
            - Estabilidad y Rendimiento: Linux es conocido por su estabilidad y
            rendimiento. Muchos servidores web, supercomputadoras y dispositivos
            embebidos lo utilizan debido a su capacidad para manejar cargas de
            trabajo intensivas y ejecutar de manera eficiente incluso en
            hardware más antiguo.
            <br />
            <br />
            - Multitarea y Multiusuario: puede ejecutar múltiples procesos
            simultáneamente y admitir varios usuarios conectados al sistema al
            mismo tiempo.
            <br />
            <br />
            - Seguridad: su estructura de permisos y control de acceso,
            así como la capacidad de implementar actualizaciones rápidamente,
            contribuyen a la resistencia del sistema frente a amenazas de
            seguridad.
          </p>
        </div>
        <img className="section-image" src={penguin} alt="Mascota de Linux" />
      </div>
    </section>
  );
}

export default Characteristics;
