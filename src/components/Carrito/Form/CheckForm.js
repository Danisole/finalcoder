import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'

import { db } from '../../../firebase'
import { BtnStyled } from '../../item/ItemStyled'

const CheckForm = () => {

 
  const refName = useRef()
  const refPhone = useRef()
  const [ id, setId ] = useState("")

  const handleSubmit = (e) =>{

      const orden = {
            buyer:{
              name: "daniela",
              phone: "123456789"
            },
            products: [],
            total: 100,
            date: serverTimestamp()
            
          }

    e.preventDefault()

    const orderCollection = collection(db, "orders")
    const consulta = addDoc(orderCollection, orden)

    consulta
      .then((docRef)=>{
          setId(docRef.id)

      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return(

  <>  
            
              {id ? <h4> Orden generada con exito, su numero de orden es # {id}</h4> : null}
       
        <div>      
              <form onSubmit={handleSubmit}>
                <div>
                  <input ref={refName} type="text" />
                </div>
                <div>
                  <input ref={refPhone} type="text" />
                </div>
                <BtnStyled>Finalizar Compra</BtnStyled>
              </form>
            </div> 
        </>
  )

    
    
  
}

export default CheckForm