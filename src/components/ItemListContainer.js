import React from 'react'
import { Routes, Route } from "react-router-dom";

const ItemListContainer = () => {
  
  return (
    <Routes>

      <Route path='/' element={<p>Home</p>} />

      <Route path='/combinado' element={<p>Combinado</p>} />

      <Route path='/tempuras' element={<p>Tempuras</p>} />

      <Route path='/postres&bebidas' element={<p>Postres y Bebidas</p>} />

      <Route path='/contacto' element={<p>Contactanos</p>} />

    </Routes>
 
      

   
    
    
  )
}

export default ItemListContainer