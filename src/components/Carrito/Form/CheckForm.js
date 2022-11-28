import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { db } from '../../../firebase'
import { useCarrito } from '../../CustomProvider'
import { BtnStyled } from '../../item/ItemStyled'
import { ContainerForm, InputForm, ContenedorForm, FormStyle } from './FormStyled'
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
        
          <ContenedorForm> 


            <h3>Formulario de pedido</h3>    
                <FormStyle onSubmit={handleSubmit}>
                  
                  <ContenedorForm>
                    <InputForm placeholder='Nombre y Apellido' ref={refName} type="text" />
                  
                    <InputForm placeholder='Telefono' ref={refPhone} type="text" />
                  </ContenedorForm>
                  <BtnStyled onClick={valorDelContexto.vaciarCartWidget} >Finalizar Compra</BtnStyled>
                </FormStyle>
          </ContenedorForm> 
        </ContainerForm>
  )

    
    
  
}

export default CheckForm