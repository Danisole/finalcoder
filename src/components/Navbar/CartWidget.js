import { BsFillBagFill } from "react-icons/bs";
import React, { useContext } from 'react'
import { contexto } from "../CustomProvider";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const { cantidadTotal } = useContext(contexto)

  
  return (

    <Link to={"/Carrito"} style={{color:'white', textDecoration: "none"}}>
      
        <BsFillBagFill />
      
        <span>{cantidadTotal()}</span>
        
        
      
    </Link>
  )
}

export default CartWidget