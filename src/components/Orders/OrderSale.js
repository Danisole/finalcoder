import React, { useState, useEffect } from 'react'
import { collection, getDocs} from "firebase/firestore"
import { db } from '../../firebase'
import { ContainerSale } from "./OrderSaleStyled"
import Serch from './Serch';
import SerchDetails from './SerchDetails';





const OrderSale = () => {

    const[serch, setSerch]= useState("") 
    const[item, setItem]=useState([])
    

    useEffect(()=>{

      const ordenesCompra = collection(db, "orders")

      const consulta = getDocs(ordenesCompra)

      consulta
      .then((resultado)=>{

        const ordenes = resultado.docs.map(doc=>({...doc.data(), id:doc.id}))
        setItem(ordenes)
      })
      .catch((error)=>{
        console.log(error)
      })
      

      if(serch===[])return

    },[serch])


    const handlerSearch=(data)=>{
        
        setSerch(data)
    }


  return (

    <ContainerSale>
        <h2>Mis pedidos</h2>
        <Serch handlerSearch={handlerSearch}/>
        <SerchDetails item={item} serch={serch}/>
    </ContainerSale>
  
    
  )
    
}

export default OrderSale

