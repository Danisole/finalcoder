import { Link } from 'react-router-dom'
import { useCarrito } from '../CustomProvider'
import { BtnStyled } from '../item/ItemStyled'
import { CheckoutContainerPriceStyled, CheckoutContainerProductosStyled,
          CheckoutEnvioStyled, CheckoutHrStyled, CheckoutSubtotalStyled,
          CheckoutTotalStyled, ContainerCheckoutStyled, ContainerCart  } from './CarritoStyled';
import CarritoDetails from './CarritoDetails'
import CheckForm from './Form/CheckForm'




const Carrito = () => {

 

  const valorDelContexto = useCarrito()

  console.log(valorDelContexto)


  if(valorDelContexto.productos.length === 0){

      return (

      <ContainerCart>
        <h1>Carrito vacio</h1>
        <BtnStyled><Link to="/" style={{color:'white', textDecoration: "none"}}>BACK HOME</Link></BtnStyled>
      </ContainerCart>
      )  
}

  return(

  < ContainerCheckoutStyled> 
    <CheckoutContainerProductosStyled>
                      
        <CarritoDetails key={valorDelContexto.productos.id} product={valorDelContexto.productos}/> 
        

        <CheckoutContainerPriceStyled>
          <CheckoutSubtotalStyled>
            <p>Subtotal</p>
            <span>$ {valorDelContexto.cantidad}</span>
          </CheckoutSubtotalStyled>
          <CheckoutEnvioStyled>
            <p>Envío:</p>
            <span>$ 300</span>
          </CheckoutEnvioStyled>
          <CheckoutHrStyled />
          <CheckoutTotalStyled>
            <p>
              TOTAL: 
            </p>
            <p>$ {valorDelContexto.cantidad + 300}</p>
          </CheckoutTotalStyled>
        </CheckoutContainerPriceStyled>
        <BtnStyled onClick={valorDelContexto.vaciarCarrito} style={{marginTop: 40}}>Vaciar Carrito</BtnStyled>
      </CheckoutContainerProductosStyled>

      <CheckForm/>

        </ContainerCheckoutStyled>
  )

    
    
  
}

export default Carrito