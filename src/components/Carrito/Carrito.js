import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../CustomProvider'
import { CheckoutHrStyled, ContainerCart, ContenedorProducto, ContenedorVacio } from "./CarritoStyled"
import { BsTrash } from "react-icons/bs";   
import CheckForm from './Form/CheckForm'
import { BtnStyled } from '../item/ItemStyled';
import { CountBtnStyled } from '../ItemDetailContainer/ItemDetailsContainerStyled';




const Carrito = () => {

  const { productos, borrarItem, vaciarCarrito } = useContext(contexto)
  console.log(productos)
  
  

  if (productos.length > 0 ){
    return (
        <ContainerCart>

          <div>

             <h1>Carrito</h1>
                {productos.map(item =>
                    <article style={{marginTop: '5rem'}} key={item.id}>
                      <ContenedorProducto>
                        <h4>{item.title}</h4>
                        <p>Cantidad:</p>
                        <p> {item.cantidad}</p>
                        <p>${item.precio}</p>
                        <CountBtnStyled  onClick={()=>borrarItem(item.productId)}><BsTrash/></CountBtnStyled>
                      </ContenedorProducto>
                      
                        <ContenedorProducto>
                          <p>Envio:</p>
                          <p> Gratis</p>
                        </ContenedorProducto>
                        <CheckoutHrStyled/>
                        <ContenedorProducto>  
                          <p>Total:</p>
                          <p>${item.precio * item.cantidad}</p>
                        </ContenedorProducto>
                    </article>
                )}
                     

                      

                <ContenedorProducto>
                    <BtnStyled onClick={vaciarCarrito}>Vaciar carrito</BtnStyled>
                    <BtnStyled>Confirmar compra</BtnStyled>
                </ContenedorProducto>
          </div>     
        <div>
          <CheckForm/>
        </div>          
        </ContainerCart>

        )}else {

            return(
            <ContainerCart>
              <ContenedorVacio>

                 <ContenedorProducto>
                        <p>Envio:</p>
                        <p> Gratis</p>
                      </ContenedorProducto>

                     <ContenedorProducto>  
                        <p>Total:</p>
                        <p>${productos.cantidad}</p>
                      </ContenedorProducto>

                     <h1>No agregaste ningún producto</h1>
                     <BtnStyled><Link to="/" style={{color:'white', textDecoration: "none"}}>Ir a comprar</Link></BtnStyled>
              </ContenedorVacio>
            </ContainerCart>
            )
        }
}




export default Carrito