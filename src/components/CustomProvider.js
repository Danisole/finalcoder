import React, { createContext, useState } from 'react'
//import { db } from '../firebase'

export const contexto = createContext()

const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    
        const [total, setTotal] = useState(4)

        const vaciarCarrito = ()=>{
          setCarrito([])
          setTotal(0)
    
        }
    
      const valorDelContexto={
        productos: carrito,
        cantidad: total,
        vaciarCarrito
      }
      console.log(valorDelContexto)

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider