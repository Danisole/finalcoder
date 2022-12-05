import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { db } from '../../../firebase'
import { BtnStyled } from '../../item/ItemStyled'
import { useContext } from 'react'
import { contexto } from '../../CustomProvider'
import { useForm } from "react-hook-form";
import { LabelForm, InputForm } from './FormStyled'



const CheckForm = () => {

  const { productos, precioTotal, vaciarCartWidget } = useContext(contexto)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
 
  // const refName = useRef()
  // const refPhone = useRef()
  // const refEmail = useRef()
  // const refAddres = useRef()
  const [ id, setId ] = useState("");

  const onSubmit = (data) =>{
    reset()
    vaciarCartWidget()
    console.log(data)

      const orden = {

              buyer:{
              name: data.refName,
              phone: data.refPhone,
              email: data.refEmail,
              domicilio: data.refAddres
              },
                products: [...productos],
                total: precioTotal(),
                date: serverTimestamp()
                
              }

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
            
              {id ? <h4> Orden generada con exito, su numero de orden es # {id}  precio total {precioTotal()}</h4> : null}
       
        <div>
          <h2>Formulario de compra</h2>      
              <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                  <LabelForm>Nombre y Apellido</LabelForm>
                  <InputForm {...register('refName', {required: true, minLength: { value:3 }})} type="text" placeholder='Nombre y Apellido'/>
                  {errors.refName?.type === "required" && <p style={{color:"red"}}>El Nombre es requerido</p>}
                  {errors.refName?.type === "minLength" && <p style={{color:"red"}}>El Nombre debe poseer al menos 3 letras</p>}
                </div>

                <div>
                  <LabelForm>Telefono</LabelForm>
                  <InputForm {...register('refPhone', {required: true, minLength: { value: 10 }})} type="number" placeholder='Telefono' />
                  {errors.refPhone?.type === "required" && <p style={{color:"red"}}>El telefono es requerido</p>}
                  {errors.refName?.type === "minLength" && <p style={{color:"red"}}>El telefono debe estar completo</p>}
                </div>

                <div>
                  <LabelForm>Email</LabelForm>
                  <InputForm {...register('refEmail', { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} type="text" placeholder='Email'/>
                  {errors.refEmail?.type === "pattern" && <p style={{color:"red"}}>El formato del mail es incorrecto</p>}
                </div>

                <div>
                    <LabelForm>Direccion</LabelForm>
                    <InputForm type="text"  {...register('refAddres', {required: true})} placeholder="Direccion"/>
                    {errors.refAddres?.type === "required" && <p style={{color:"red"}}>La direccion es requerida</p>}
                  </div>
                
                <BtnStyled >Finalizar Compra</BtnStyled>
              </form>
            </div> 

            
            
        </>
  )

}

export default CheckForm