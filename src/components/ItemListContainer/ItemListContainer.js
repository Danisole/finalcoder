import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, where, query, getDocs } from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import { db } from '../../firebase'
import { toast } from 'react-toastify';



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
          toast.error(error)
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

    let promise = ()=>{
      
      const resolveAfter3Sec = new Promise((resolve, reject)=>{
        setTimeout(reject, 3000)
      })

        toast.promise(resolveAfter3Sec,{
          pending: "Cargando productos",
          success: "Promise has resolve",
          position: "top-right",
          theme: "dark",
        })
    }



  return (
  
    <div>
      { items.length === 0 ? promise() : <ItemList items={items}/> }
    </div>
  )
}

export default ItemListContainer

