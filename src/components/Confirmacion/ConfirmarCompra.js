import React, { useContext } from 'react'
import { ContainerResum, ContenedorForm } from '../Carrito/Form/FormStyled'
import CheckForm from '../Carrito/Form/CheckForm'
import { contexto } from '../CustomProvider'
import { ContenedorProducto } from '../Carrito/CarritoStyled'




const ConfirmarCompra = () => {

  const { productos, precioTotal } = useContext(contexto)

  return (
    <>
    <ContainerResum>

      <ContenedorForm>

        <h2>Resumen de la compra</h2>

         <div>
         <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
              </tr>
            </thead>
            <tbody>
          {productos.map(item =>

              <tr key={item.id}>
                  <td >{item.title}</td>
                  <td >{item.cantidad}</td>
                  <td >${item.precio}</td>
              </tr>)}
          </tbody>
          </table>

          <ContenedorProducto>
            <p>Total:</p>
            <p>${precioTotal()}</p>
          </ContenedorProducto>

      </div>

      </ContenedorForm>

      <ContenedorForm>

       
        <CheckForm/>
      </ContenedorForm>
      
    </ContainerResum>
     
    </>
            

      
  )
}

export default ConfirmarCompra