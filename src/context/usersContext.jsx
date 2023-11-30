import { createContext, useState, useEffect } from "react";
const usersContext = createContext();

export const UsersContextProvider = ({children}) => {

    const [user, setUser] = useState([])

    async function registerUser(data){
        console.log(data);
        
    };

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <usersContext.Provider value = {{ user, setUser, registerUser }}>
            {children}
        </usersContext.Provider>
    )
}

export default usersContext;