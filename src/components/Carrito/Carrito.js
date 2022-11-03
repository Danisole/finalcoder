import React from 'react'
import { Link } from 'react-router-dom'

const Carrito = () => {
  return (
    <>
    <div>Carrito vacio</div>
    <br></br>
    <p><Link to="/" style={{color:'red', textDecoration: "none"}}>Volver al home</Link></p>
    </>
    
  )
}

export default Carrito