import React, { createContext, useState, useContext } from 'react'
//import { db } from '../firebase'

export const contexto = createContext()

const { Provider } = contexto

export const useCarrito = ()=>{
  return useContext(contexto)
}


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

        

        const vaciarCarrito = ()=>{
          setCarrito([])
          setTotal(0)
    
        }

        const agregarProducto = (producto, cantidad) =>{
          
          if(isInCart(producto, cantidad)){
          setCarrito(carrito.map(product =>{
            return product.id === producto.id ? {...product, cantidad: product.cantidad +cantidad } : product
          }))

          }else{
            console.log("producto nuevo en el carrito")
        
            setCarrito([
                ...carrito, 
                {...producto, cantidad }
            ])

          setTotal(total + producto.precio * cantidad)
          setCantidadTotal(cantidadTotal + cantidad)

          }

        }
        const clearCarrito = () => setCarrito([]);

        const isInCart = (id) =>{
            return carrito.find(product => product.id ===id) ? true : false;
        }

        const borrarItem = (id) =>{
          setCarrito(carrito.filter(product => product.id != id))
        }
    
      const valorDelContexto={
        productos: carrito,
        cantidad: total,
        cantidadTotal: cantidadTotal,
        vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarItem,
        isInCart,
        clearCarrito
      }
      console.log(valorDelContexto)

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider