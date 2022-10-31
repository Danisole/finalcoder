import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";



const productosIniciales = [
  {id:1, nombre:"campera", categoria:"producto"},
  {id:2, nombre:"remera", categoria:"producto"}
]


const ItemListContainer = () => {

  const [item, setItem] = useState([])
  

    useEffect(()=>{

      console.log("aca pido los productos despues de mostrar el cargando asi el usuario sabe q tiene q esperar")
      
      let simulacionPedido = new Promise((res)=>{

        setTimeout(()=>{
          res(productosIniciales)
        },2000)
      })

      simulacionPedido

      .then((respuesta)=>{
          setItem(respuesta)
      })

      .catch((error)=>{
          console.log("error")
      })
    })


  
  return (
    <>

    <Routes>

                <Route path='/' element={<p>Home</p>} />

                

                <Route path='/tempuras' element={<p>Tempuras</p>} />

                <Route path='/postres&bebidas' element={<p>Postres y Bebidas</p>} />

                

                <Route path='*' element={<p>404</p>} />

    </Routes>

    {/* <div>
      {item.length == 0 ? <h1>Cargando...</h1> : <ItemList item={item}/>}
    </div> */}

    </>
  )
}

export default ItemListContainer