import { createContext, useState, useEffect } from "react";
const linuxContext = createContext();

export const LinuxVersionsProvider = ({children}) => {

    const [version, setVersion] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api")
        .then(res => res.json())
        .then(data => setVersion(data))
    }, [])

    return (
        <linuxContext.Provider value = {{ version, setVersion }}>
            {children}
        </linuxContext.Provider>
    )
}

export default linuxContext;