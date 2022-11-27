import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../CustomProvider'
import { BtnStyled } from '../item/ItemStyled'
import { CheckoutContainerPriceStyled, CheckoutContainerProductosStyled,
          CheckoutSubtotalStyled, ContainerCheckoutStyled, ContainerCart,
           ProductCardContainerCarrito  } from './CarritoStyled';
import CheckForm from './Form/CheckForm'

const Carrito = () => {

  const { productos, borrarItem, vaciarCarrito } = useContext(contexto)
  console.log(productos)

      if (productos.length > 0 ){
        return (
            <ContainerCheckoutStyled>
              <CheckoutContainerProductosStyled>
                <h1>Carrito</h1>
                {productos.map(item =>
                    <ProductCardContainerCarrito style={{marginTop: '5rem'}} key={item.id}>

                        <CheckoutSubtotalStyled>Artículo: {item.title}</CheckoutSubtotalStyled>
                        <CheckoutSubtotalStyled>Unidades: {item.cantidad}</CheckoutSubtotalStyled>
                        <CheckoutSubtotalStyled>Subtotal: ${item.precio * item.cantidad}</CheckoutSubtotalStyled>
                        <CheckoutSubtotalStyled>Envio: Gratis</CheckoutSubtotalStyled>
                    
                    
                        <BtnStyled onClick={()=>borrarItem(item.productId)}>borrar</BtnStyled>
                        <CheckoutContainerPriceStyled>Total: ${item.precio * item.cantidad}</CheckoutContainerPriceStyled>
                
                </ProductCardContainerCarrito>
                )}
                <div className="checkout">
                    <BtnStyled  onClick={vaciarCarrito}>Vaciar carrito</BtnStyled>
                </div>
            </CheckoutContainerProductosStyled>    
                
            </ContainerCheckoutStyled>
        )}else {

            return(

              <ContainerCart>
                    <h1>No agregaste ningún producto</h1>
                     <BtnStyled><Link to="/" style={{color:'white', textDecoration: "none"}}>Ir a comprar</Link></BtnStyled>
                    </ContainerCart>
            
            )
        }
}




export default Carrito