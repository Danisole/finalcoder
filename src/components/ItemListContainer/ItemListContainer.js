import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCat } from "../utils/Utils"


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {cat} = useParams()
  
  console.log(cat)

    useEffect(()=>{

    if(cat){
      getProductsByCat(cat)
      .then(res=>{
        setItems(res)
      })
      .catch(err =>{
        console.log("error getProducts")
      })
    }else{

      getProducts()
        .then((respuesta)=>{
          console.log("producto cargado uwu")
          setItems(respuesta)

        })
        .catch((error) =>{
          console.log("nuevo error")
        })
    }

      
    },[cat])

  return (
  
    <div>
      { items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items}/> }
    </div>
  )
}

export default ItemListContainer