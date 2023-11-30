import React from 'react'
import NavBar from "../components/NavBar";
import Characteristics from "../sections/Characteristics.jsx";
import History from "../sections/History.jsx";
import Versions from "../sections/Versions.jsx";
import { LinuxVersionsProvider } from '../context/linuxContext.jsx';

function Home() {
  return (
    <>
        <NavBar />
        <div className="principal-container">
            <h1>
                Descubre el Poder de la Libertad:
                <br />
                Explorando el Mundo de Linux
            </h1>
            <History /> 
            <Characteristics />
        </div>
        <div>
        <LinuxVersionsProvider>
            <Versions />
        </LinuxVersionsProvider>
        </div>
    </>
    
  )
}

export default Home