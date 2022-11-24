import React from 'react'
import { ContainerFooter, FooterSpan } from './FooterStyled'
import { BsHeart } from "react-icons/bs";


const Footer = () => {

  return (

    <ContainerFooter>
        <FooterSpan>Sitio creado con  <BsHeart style={{margin: 5, color:"red"}}/>   por Danisol </FooterSpan>
        <p>© 2022 - Todos los derechos reservados</p>
    </ContainerFooter>
    
  )
}

export default Footer