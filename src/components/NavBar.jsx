import React from "react";
import "../style/NavBar.css";
import penguinPet from "../img/linux_penguin.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-logo">
          <a href="/">LinuxLab</a>
          <a href="/">
            <img
              className="penguin-logo"
              src={penguinPet}
              alt="Logo de Linux (que bichito más chistoso)"
            />
          </a>
        </div>
        <div>

        <button
          className={`open-menu ${isOpen && "open"}`}
          onClick={toggleMenu}
          >
          ☰
        </button>
        </div>
        <ul className={`nav-list ${isOpen && "open"}`}>
          <li>
            <a className="nav-section" href="#historia" onClick={toggleMenu}>
              HISTORIA
            </a>
          </li>
          <li>
            <a
              className="nav-section"
              href="#caracteristicas"
              onClick={toggleMenu}
            >
              CARACTERÍSTICAS
            </a>
          </li>
          <li>
            <a className="nav-section" href="#versions" onClick={toggleMenu}>
              VERSIONES
            </a>
          </li>
          <li>
              <Link to="/login" className="nav-section">
                ACCEDER
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
