import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../style/Register.css";

function Register() {
  const FormRef = useRef();

  const handleFetch = (e) => {
    e.preventDefault();

    const newUser = {
      username: FormRef.current.username.value,
      email: FormRef.current.email.value,
      pass: FormRef.current.password.value,
    };

    fetch("http://localhost:3000/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("mensaje", data);
      })
      .catch((err) => {
        console.log(err);
      });

    alert("Te has registrado con exito!");
  };

  return (
    <>
      <div className="register-container">
        <Link to="/">
          <img className="logo" src="src/img/linux_penguin.png" />
        </Link>
        <section className="register-section">
          <h2>Registrarse</h2>
          <form className="form-section" ref={FormRef} onSubmit={handleFetch}>
            <label htmlFor="username">Usuario</label>
            <input
              name="username"
              type="text"
              placeholder="Nombre de usuario..."
            />

            <label htmlFor="email">Correo</label>
            <input type="email" name="email" placeholder="ejemplo@email.com" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />

            <button type="submit" className="ov-btn-grow-box">
              Hecho
            </button>
            <div className="btn-group">
              <Link to="/Login">
                <a className="nav-section">Iniciar sesión</a>
              </Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Register;
