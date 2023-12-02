import {React, useRef, useState} from "react";
import '../style/Versions.css';

function Card({v}) {
    
    const handleDelete = (e) => {
        const token = localStorage.getItem('token')
        if (!token){
          e.preventDefault()
          alert('Inicia sesión para eliminar contenido.')
        }
        else {
            fetch(`http://localhost:3000/api/delete?id=${v.id}`,
            {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': token}
            })
            .then(response => console.log(response.json()))
            .then(data => console.log(data))
            .catch(err => console.log(err))
            window.location.replace('/')
        }
    }

    const FormRef = useRef()

    const handleUpdate = (e) => {
        const token = localStorage.getItem('token')
        if (!token){
          e.preventDefault()
          alert('Inicia sesión para eliminar contenido.')
        }
        else {
            const updateDependece = {
                "name": FormRef.current.name.value,
                "ver": FormRef.current.version.value,
                "launch_year": FormRef.current.launchyear.value,
                "website": FormRef.current.website.value,
                "info": FormRef.current.desc.value,
                "image": FormRef.current.image.value
            }
            
            fetch(`http://localhost:3000/api/update?id=${v.id}`,
            {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Authorization': token},
            body: JSON.stringify(updateDependece)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            window.location.replace('/')
        }        
    }

    
    const [display, setDisplay] = useState(false)
    const displayForm = () => {
        const token = localStorage.getItem('token')
        if (!token){
          alert('Inicia sesión para editar contenido.')
        }else{
            const form = document.getElementById(v.id);
            if (form.classList.contains('d-none')){
                form.classList.remove('d-none')
                form.classList.add('fixed')
                setDisplay(true)
            } else if (form.classList.contains('fixed')){
                form.classList.remove('fixed')
                form.classList.add('d-none')
                setDisplay(false)
            }
        }
    }


    return (
        <>
        <div id={v.id} className="d-none" >
            <section className='form-container'>
                <form className='form-section' ref={FormRef} onSubmit={handleUpdate}>
                    <label htmlFor="name">Nombre</label>
                    <input name='name' type="text" defaultValue={v.name}/>

                    <label htmlFor="version">Versión</label>
                    <input name='version' type="text" defaultValue={v.ver}/>
                    
                    <label htmlFor="launchyear">Fecha de lanzamiento</label>
                    <input name='launchyear' type="text" defaultValue={v.launch_year}/>

                    <label htmlFor="website">Sitio web</label>
                    <input name='website' type="text" defaultValue={v.website}/>
                    
                    <label htmlFor="desc">Descripción</label>
                    <input name='desc' type="text" defaultValue={v.info}/>
                    
                    <label htmlFor="image">Imagen</label>
                    <input name='image' type="text" defaultValue={v.image}/>

                    <div className="d-flex">
                    <button onClick={displayForm} type="button" >Cerrar</button>
                    <button type='submit'>Actualizar</button>
                    </div>
                </form>
            </section>
        </div>

        <div className="card Card" key={v.id}>
            <img className="card-image" src={v.image} alt={v.title} />
            <div className="card-body">
            <h3 className="card-title">
                {v.name}
            </h3>
            <h4><code> Version: {v.ver}</code></h4>
            <p id="info" className="card-text">{v.info}</p>
            </div>
            <a href={v.website} target="_blank" className="btn btn-outline-secondary round text">
                Sitio Web
            </a>
            <div className="btn-group">
                <button onClick={displayForm} className="btn">Editar</button>
                <button onClick={handleDelete} className="btn">Eliminar</button>
            </div>            
        </div>
        </>
    )
}

export default Card;
