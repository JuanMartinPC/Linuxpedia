import React from "react";
import "../style/NavBar.css";
import penguinPet from "../img/linux_penguin.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-logo">
          <a href="/">LinuxLab</a>
        </div>
        <a href="/">
          <img
            className="penguin-logo"
            src={penguinPet}
            alt="Logo de Linux (que bichito más chistoso)"
          />
        </a>
        <ul className="nav-list">
          <li>
            <a className="nav-section" href="#historia">
              HISTORIA
            </a>
          </li>
          <li>
            <a className="nav-section" href="#caracteristicas">
              CARACTERÍSTICAS
            </a>
          </li>
          <li>
            <a className="nav-section" href="#versions">
              VERSIONES
            </a>
          </li>
          <li>
            <a className="nav-section">
              <Link to="/login" className="toLogin">
                <i className="fa-solid fa-user"></i>
              </Link>
            </a>
          </li>
        </ul>      
      </nav>
    </div>
  );
}

export default NavBar;
