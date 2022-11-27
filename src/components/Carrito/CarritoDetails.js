import React, { useState } from 'react'
import { useCarrito } from '../CustomProvider'
import { ProductCardContainerCarrito } from './CarritoStyled';
import { BsTrash } from "react-icons/bs";
import { CountBtnStyled } from '../ItemDetailContainer/ItemDetailsContainerStyled';



const CarritoDetails = () => {

   
    const valorDelContexto = useCarrito()
    console.log(valorDelContexto)

    
   
   return (
    <div>
         {
                valorDelContexto.productos.map(product =>

                <ProductCardContainerCarrito key={product.id} product={product}>
                    <div>
                        <img src={product.img}/>
                    </div>
                    <h4>
                        {product.title}
                    </h4> 
                    <p>Cantidad: {product.cantidad}</p>
                    <p>
                       ${product.precio}
                    </p>
                   
                    <CountBtnStyled onClick={valorDelContexto.borrarItem}><BsTrash/></CountBtnStyled>

                    
                    </ProductCardContainerCarrito> )
              }
    </div>
)

};

export default CarritoDetails