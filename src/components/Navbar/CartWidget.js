import { BsFillBagFill } from "react-icons/bs";
import React from 'react'
import  {LogoCart}  from "./NavBar.elements"


const CartWidget = () => {

  return (
   
      <LogoCart>
        <BsFillBagFill />
        <span>3</span>
      </LogoCart>
  
  )
}

export default CartWidget