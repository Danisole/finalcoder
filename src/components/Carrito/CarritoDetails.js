import React from 'react'
import { contexto } from '../CustomProvider'
import { BsTrash } from "react-icons/bs"; 
import { CountBtnStyled } from '../ItemDetailContainer/ItemDetailsContainerStyled';
import { ContenedorProducto } from "./CarritoStyled"
import { useContext } from 'react'


const CarritoDetails = () => {

    const { productos, borrarItem } = useContext(contexto)

  return (
<div>


    {productos.map(item =>
        <article style={{marginTop: '5rem'}} key={item.id}>
          <ContenedorProducto>
            <h4>{item.title}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>${item.precio}</p>
            <CountBtnStyled  onClick={()=>borrarItem(item.productId)}><BsTrash/></CountBtnStyled>
          </ContenedorProducto>

        </article>)}
    </div>
  )
}

export default CarritoDetails