import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../CustomProvider'
import { CheckoutHrStyled, ContainerCart, ContenedorProducto, ContenedorVacio } from "./CarritoStyled"
import { BtnStyled } from '../item/ItemStyled';
import CarritoDetails from './CarritoDetails'



const Carrito = () => {

  const { productos, vaciarCarrito, precioTotal } = useContext(contexto)
 
  if (productos.length > 0 ){

    return (

        <ContainerCart>
          <div>
             <h1>Carrito</h1>
                
              <CarritoDetails/>    

              <ContenedorProducto>
                <p>Envio:</p>
                <p> Gratis</p>
              </ContenedorProducto>

              <CheckoutHrStyled/>

              <ContenedorProducto>  
                <p>Total:</p>
                <p>${precioTotal()}</p>
              </ContenedorProducto>

            
                <ContenedorProducto>
                    <BtnStyled onClick={vaciarCarrito}>Vaciar carrito</BtnStyled>
                    <BtnStyled><Link to="/" style={{color:'white', textDecoration: "none"}}>Seguir comprando</Link></BtnStyled>
                    <BtnStyled><Link to="/ConfirmarCompra" style={{color:'white', textDecoration: "none"}}>Confirmar compra</Link></BtnStyled>
                    
                </ContenedorProducto>
              </div>  

        </ContainerCart>
        )}else {

            return(
            
              <ContenedorVacio>
                <h2>No agregaste ningún producto</h2>
                <BtnStyled><Link to="/" style={{color:'white', textDecoration: "none"}}>Ir a comprar</Link></BtnStyled>
              </ContenedorVacio>
            
            )
        }
}
export default Carrito