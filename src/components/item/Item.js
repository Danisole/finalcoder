import React from 'react'
import { ProductosCard, BtnStyled } from './ItemStyled'

const Item = ({title, img, descripcion, precio}) => {
  return (

      <ProductosCard>

        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <p>{descripcion}</p>
        <p>${precio}</p>

        <BtnStyled>Ver mas</BtnStyled>

      </ProductosCard>

  )
}

export default Item