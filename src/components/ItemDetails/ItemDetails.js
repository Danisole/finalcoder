import ItemCount from "../ItemCount/ItemCount"
import { BtnStyled } from "../item/ItemStyled"
// import { useContext } from "react"
import { useCarrito } from "../CustomProvider"
import { ProductCardContainer, ContainerDivs, DetailsDiv } from "../ItemDetailContainer/ItemDetailsContainerStyled"
import { useState } from "react"



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
  }


  return (
    
    <ProductCardContainer style={{marginTop:50,background: "none"}}>
      
        <img src={producto.img} alt={producto.title}/>

      <ContainerDivs>

        <DetailsDiv>
          <h2>{producto.title}</h2>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
        </DetailsDiv>

        <DetailsDiv>
          {confirmado && <BtnStyled onClick={handleClick} style={{fontSize:10}}>Agregar al carrito</BtnStyled>}
        
          <ItemCount init={cantidad} handleOnAdd={handleOnAdd} />
        </DetailsDiv>

      </ContainerDivs>
       
    </ProductCardContainer>
    
  )
}

export default ItemDetails