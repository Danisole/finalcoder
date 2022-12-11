import React from 'react'
import Item from '../item/Item'
import { ProductosContainer } from './ItemListStyled'

const ItemList = ({items}) => {
  
  return (
  
    <ProductosContainer>

      {
        items.map((item)=>{
          return <Item key={item.id} {...item} />
        })

      }

    </ProductosContainer>
  )
}

export default ItemList