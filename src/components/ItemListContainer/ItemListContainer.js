import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { productosIniciales } from '../data/Products'

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {cat} = useParams()

    useEffect(()=>{

      if(!cat){
        console.log("pido todo")
      }else{
        console.log("pido solo" + cat)
      }

      let simulacionPedido = new Promise((res)=>{

        setTimeout(()=>{
          res(productosIniciales)
          console.log(productosIniciales)
        },2000)
      })

      simulacionPedido

      .then((respuesta)=>{
          setItems(respuesta)
      })

      .catch((error)=>{
          console.log(error)
      })
    },[cat])

  return (
  
    <div>
      { items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items}/> }
    </div>
  )
}

export default ItemListContainer