import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase'
import { useCarrito } from '../CustomProvider'
import { ContenedorCarrito } from './CarritoStyled'



const Carrito = () => {

  const valorDelContexto = useCarrito()
  console.log(valorDelContexto)


  const refName = useRef()
  const refPhone = useRef()
  const [ id, setId ] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    const orden = {
      buyer:{
        name: "daniela",
        phone: "123456789"
      },
      products: [],
      total: 100,
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


  return (
    <ContenedorCarrito>
      <div>
        {id ? <h4> Orden generada con exito, su numer de orden es # {id}</h4> : null}
        <form onSubmit={handleSubmit}>
          <div>
            <input ref={refName} type="text" />
          </div>
          <div>
            <input ref={refPhone} type="text" />
          </div>
          <button>Guardar</button>
        </form>
      </div> 
      <br></br>
    <div>Carrito vacio</div>
    <br></br>
    <p><Link to="/" style={{color:'red', textDecoration: "none"}}>Volver al home</Link></p>
    
    </ContenedorCarrito>
    
  )
}

export default Carrito