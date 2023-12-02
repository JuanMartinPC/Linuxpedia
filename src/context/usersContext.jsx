/* 
import { createContext, useState } from "react";
const usersContext = createContext();

export const UsersContextProvider = ({children}) => {

    const [token, setToken] = useState()
    const [newUser, setNewUser] = useState()

    const handleFetch = async (e) => {
        e.preventDefault();        
    
        const response = await fetch("http://localhost:3000/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
    
        const text = await response.text();
        setToken(text.split('"')[7])
        const res = text.split('"')[3];
    
        if (res !== "Usuario autorizado.") {
            const render = document.getElementById("msj");
            render.innerText =
              "La direccion de correo o la contraseña son incorrectas.";
          } else {
            //return window.location.replace("/")
          }
    }

    return (
        <usersContext.Provider value={{ token, newUser, handleFetch, setNewUser}}>
            {children}
        </usersContext.Provider>
    )
}

export default usersContext; */