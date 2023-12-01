import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/Register.css';

function Create() {
    
    const FormRef = useRef() 

    const handleFetch = (e) => {
        e.preventDefault();

        const newDependece = {
            "name": FormRef.current.name.value,
            "ver": FormRef.current.version.value,
            "launch_year": FormRef.current.launchyear.value,
            "website": FormRef.current.website.value,
            "info": FormRef.current.desc.value,
            "image": FormRef.current.image.value
        }

        fetch('http://localhost:3000/api/add',
        {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newDependece)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        window.location.replace('/')
    }

  return (
    <>
        <div className="register-container">
        <Link to="/">
          <img className="logo-create" src="src/img/linux_penguin.png" />
        </Link>
        <section className='register-section-create'>
            <form className='form-section-create' ref={FormRef} onSubmit={handleFetch}>
                <label htmlFor="name">Nombre</label>
                <input name='name' type="text" />

                <label htmlFor="version">Versión</label>
                <input name='version' type="text" />
                
                <label htmlFor="launchyear">Fecha de lanzamiento</label>
                <input name='launchyear' type="text" />

                <label htmlFor="website">Sitio web</label>
                <input name='website' type="text" />
                
                <label htmlFor="desc">Descripción</label>
                <input name='desc' type="text" />
                
                <label htmlFor="image">Imagen</label>
                <input name='image' type="text" />

                <button type='submit' className='ov-btn-grow-box'>Agregar</button>
            </form>
        </section>
        </div>
    </>
    
  )
}

export default Create