import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { db } from '../../../firebase'
import { useCarrito } from '../../CustomProvider'
import { BtnStyled } from '../../item/ItemStyled'
import { ContainerForm } from './FormStyled'
import { toast } from 'react-toastify';


const CheckForm = () => {

  const valorDelContexto = useCarrito()
    
 
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
        toast.error('Error', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
  }

  

  return(

       <ContainerForm>  
            
                {id ? <h4> Orden generada con exito, su numero de orden es # {id}</h4> : null}
        
          <div>      
                <form onSubmit={handleSubmit}>
                  <div>
                    <input ref={refName} type="text" />
                  </div>
                  <div>
                    <input ref={refPhone} type="text" />
                  </div>
                  <BtnStyled onClick={valorDelContexto.vaciarCheckOut}>Finalizar Compra</BtnStyled>
                </form>
              </div> 
        </ContainerForm>
  )

    
    
  
}

export default CheckForm