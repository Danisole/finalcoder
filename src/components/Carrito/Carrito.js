import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Carrito = () => {

  const refName = useRef()
  const refAge = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(refName.current.value)
    console.log(refAge.current.value)
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input ref={refName} type="text" />
          </div>
          <div>
            <input ref={refAge} type="text" />
          </div>
          <button>Guardar</button>
        </form>
      </div> 
      <br></br>
    <div>Carrito vacio</div>
    <br></br>
    <p><Link to="/" style={{color:'red', textDecoration: "none"}}>Volver al home</Link></p>
    
    </>
    
  )
}

export default Carrito