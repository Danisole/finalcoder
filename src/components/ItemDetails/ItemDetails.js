import ItemCount from "../ItemCount/ItemCount"
import { BtnStyled } from "../item/ItemStyled"
import { useCarrito } from "../CustomProvider"
import { ProductCardContainer, ContainerDivs, DetailsDiv } from "../ItemDetailContainer/ItemDetailsContainerStyled"
import { useState } from "react"
import { toast } from 'react-toastify';



const ItemDetails = ({producto}) => {

  const { agregarProducto } = useCarrito()
  const [cantidad, setCantidad] = useState(1)
  const [confirmado, setConfirmado] = useState(false)

  
  

  const handleOnAdd = (cantidad)=>{
    console.log("se agrego " + cantidad + " productos")
    console.log(producto)
    setCantidad(cantidad)
    setConfirmado(true)
  }

  const handleClick =()=>{
    
    agregarProducto(producto, cantidad)

    toast.success('Producto agregado con exito! Ve al carrito', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  }



  return (
    
    <ProductCardContainer style={{marginTop:50,background: "none"}}>
      
        <img src={producto.img} alt={producto.title}/>

      <ContainerDivs>

        <DetailsDiv>
          <h2>{producto.title}</h2>
          <p>{producto.descripcion}</p>
          <p>$ {producto.precio * cantidad}</p>
        </DetailsDiv>

        <DetailsDiv>
          {confirmado && <BtnStyled onClick={handleClick} style={{fontSize:10}}>Agregar al carrito</BtnStyled>}
        
          <ItemCount init={cantidad} stock={producto.stock} handleOnAdd={handleOnAdd} />
        </DetailsDiv>

      </ContainerDivs>
       
    </ProductCardContainer>
    
  )
}

export default ItemDetails