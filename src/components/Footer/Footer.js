import React from 'react'
import { ContainerFooter, FooterSpan } from './FooterStyled'
import { BsHeart } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";


const Footer = () => {

  return (

    <ContainerFooter>
        <FooterSpan>Sitio creado con  <BsHeart style={{margin: 5, color:"red"}}/>   por Danisol </FooterSpan>
        <p>Encontranos en <a href='https://www.instagram.com/danisole82/?hl=es' target={"_blanc"}><AiOutlineInstagram/></a> <a href='https://www.facebook.com/dani.sole82' target={"_blanc"}><AiOutlineFacebook/></a> <a href='https://twitter.com/Danisol82' target={"_blanc"}><AiFillTwitterCircle/></a> <a href='https://github.com/Danisole' target={"_blanc"}><AiFillGithub/></a></p>
        <p>© 2022 - Todos los derechos reservados</p>
    </ContainerFooter>
    
  )
}

export default Footer