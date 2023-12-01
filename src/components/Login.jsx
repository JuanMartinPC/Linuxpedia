import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../style/Register.css";

function Login() {
  const FormRef = useRef();

  const handleFetch = async (e) => {
    e.preventDefault();

    const newUser = {
      email: FormRef.current.email.value,
      pass: FormRef.current.password.value,
    };

    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const text = await response.text();
    //const token = text.split('"')[7];
    const res = text.split('"')[3];
    console.log(res);
    if (res !== "Usuario autorizado.") {
      const render = document.getElementById("msj");
      render.innerText =
        "La direccion de correo o la contraseña son incorrectas.";
    } else {
      window.location.replace("/");
    }
  };

  return (
    <>
      <div className="register-container">
        <Link to="/">
          <img className="logo" src="src/img/linux_penguin.png" />
        </Link>
        <section className="register-section">
          <h2>Iniciar sesión</h2>
          <form className="form-section" ref={FormRef} onSubmit={handleFetch}>
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />
            <button type="submit" className="ov-btn-grow-box">
              Ingresar
            </button>
            <div className="pd-5">
              <Link to="/Register">
                <p className="nav-section">Crear una cuenta</p>
              </Link>
            </div>
            <p id="msj"></p>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
