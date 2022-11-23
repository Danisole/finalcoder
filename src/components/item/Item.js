import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../CustomProvider'
import { ProductosCard, BtnStyled } from './ItemStyled'


const Item = ({title, img, descripcion, precio, id}) => {

  const resultado = useContext(contexto)
  

  console.log(resultado)

  return (

      <ProductosCard>
      
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <p>{descripcion}</p>
        <p>${precio}</p>

        <BtnStyled><Link to={`/item/${id}`} style={{color:'white', textDecoration: "none"}}>Ver mas</Link></BtnStyled>

      </ProductosCard>

  )
}

export default Item