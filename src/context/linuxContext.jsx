import { createContext, useState, useEffect } from "react";
const linuxContext = createContext();

export const LinuxVersionsProvider = ({children}) => {

    const [version, setVersion] = useState([])
    const [search, setSearch] = useState()
    const [searchResults, setSearchResults] = useState()  
    const [update, setUpdate] = useState(false)    

    useEffect(() => {
        fetch("http://localhost:3000/api")
        .then(res => res.json())
        .then(data => setVersion(data))
    }, [])


    useEffect(()=>{
        if (search !== undefined){
            version.forEach((e) => {
                setSearchResults(version.filter((e) => e.info.toLowerCase().includes(search)))
            })
        }
    },[update])

    return (
        <linuxContext.Provider value = {{ version, setVersion, setSearch, searchResults, setUpdate }}>
            {children}
        </linuxContext.Provider>
    )
}

export default linuxContext;