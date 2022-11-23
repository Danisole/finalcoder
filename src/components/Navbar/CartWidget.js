import { BsFillBagFill } from "react-icons/bs";
import React, { useContext } from 'react'
import { contexto } from "../CustomProvider";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const valorDelContexto = useContext(contexto)
  
  return (

    <Link to={"/Carrito"} style={{color:'white', textDecoration: "none"}}>
      
        <BsFillBagFill />
        {<span>{valorDelContexto.cantidad}</span>}
      
    </Link>
  )
}

export default CartWidget