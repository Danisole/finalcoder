import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from '../../firebase'
import ItemDetails from '../ItemDetails/ItemDetails'
import { ContenedorDetails } from './ItemDetailsContainerStyled'



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { productId } = useParams()
    

    useEffect(()=>{
        
      const productosCollection = collection(db, "productosIniciales")
      const refe = doc(productosCollection, productId)
      const consulta = getDoc(refe)

      consulta
        .then(res =>{
          setItem(res.data())
        })
        .catch((error) =>{
          console.log(error)
        })
    },[])
    
  return (
    <ContenedorDetails>
      <ItemDetails producto={{productId, ...item}}/> 
    </ContenedorDetails>
    
  )
}

export default ItemDetailContainer