import React from 'react'
import { Link } from 'react-router-dom'
import { BtnStyled } from '../item/ItemStyled'
import { ContenedorError } from './ErrorStyled'


const Error = () => {
  return (
    <ContenedorError>
        <h1>
            ERROR 404 NOT FOUND
        </h1>

        <BtnStyled><Link to="/" style={{color:'white', textDecoration: "none"}}>GO BACK</Link></BtnStyled>
    </ContenedorError>
  )
}

export default Error