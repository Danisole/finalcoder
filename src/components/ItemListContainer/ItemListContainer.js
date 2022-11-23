import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { collection, where, query, getDocs, getDoc, doc, addDoc } from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import { db } from '../../firebase'



const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {cat} = useParams()
  
    useEffect(()=>{

    const productosCollection = collection(db, "productosIniciales")

    if(cat){

      const filtro = query(productosCollection, where("category", "==", cat))
      const consulta = getDocs(filtro)

      consulta
        .then((resultado)=>{
          
          const productos = resultado.docs.map(doc =>({...doc.data(), id: doc.id}))
          setItems(productos)
        })
        .catch((error) =>{
          console.log(error)
        })
      

    }else{

      const consulta = getDocs(productosCollection)

      consulta
        .then((resultado)=>{

        const productos = resultado.docs.map(doc =>({...doc.data(), id:doc.id}))
        setItems(productos)
      })
        .catch((error) =>{
          console.log(error)
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