import React, { createContext, useState, useContext } from 'react'
import { toast } from 'react-toastify';


export const contexto = createContext()

const { Provider } = contexto

export const useCarrito = ()=>{
  return useContext(contexto)
}


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    

        
        const agregarProducto = (productToAdd, cantidad) => {
          const newObj = {
            ...productToAdd,
            cantidad
          }
          if(isInCart(newObj.productId)){
            carrito.map(el => {
                if(el.productId === newObj.productId)  {
                  el.cantidad += newObj.cantidad
                }
                return(el)
                })
        
            }else {
              setCarrito([...carrito, newObj])
            }
          }
        const isInCart = (id) =>{
            return carrito.find(product => product.id ===id) ? true : false;
        }


        const cantidadTotal = () => {
          let count = 0
          carrito.forEach(prod => {
              count = count + prod.cantidad
          })
          return count
      }

       const borrarItem = (id) =>{
          const deleteItem = carrito.filter(el => el.productId !== id)
          setCarrito([...deleteItem])

          toast.success('Producto eliminado con exito', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }

        const vaciarCarrito = ()=>{
          toast.success('Carrito vacio', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
              setCarrito([])

            
        }
    
      const valorDelContexto={
        productos: carrito,
        cantidad: total,
        cantidadTotal: cantidadTotal,
        agregarProducto,
        borrarItem,
        isInCart,
        vaciarCarrito,
        
        
      }
      console.log(valorDelContexto)

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider