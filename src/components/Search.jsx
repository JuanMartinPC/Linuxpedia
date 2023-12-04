import {React, useRef, useContext} from 'react';
import linuxContext from '../context/linuxContext';

function Search(){
    const {setSearch, setUpdate} = useContext(linuxContext)
    const searchRef = useRef()

    const handleSearch = () => {
        const res = searchRef.current.searchBar.value
        setSearch(res)
        setUpdate(true)
        setTimeout(()=>{setUpdate(false)}, 1000)
    }

    return (
        <div>
            <hr />
            <form ref={searchRef}>
                <label htmlFor="searchBar"><h3>Buscar por palabra clave: </h3></label>
                <input onChange={(e) => {e.preventDefault(), handleSearch()}} type="search" name="searchBar" placeholder='Buscar...'/>
            </form>
        </div>
  )
}

export default Search