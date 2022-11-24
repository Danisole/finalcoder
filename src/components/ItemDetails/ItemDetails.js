import ItemCount from "../ItemCount/ItemCount"
import { BtnStyled, ProductosCard } from "../item/ItemStyled"
import { useContext } from "react"
import { contexto } from "../CustomProvider"
import { ProductCardContainer, ContainerDivs, DetailsDiv } from "../ItemDetailContainer/ItemDetailsContainerStyled"



const ItemDetails = ({producto}) => {
  
  const valorDelContexto = useContext(contexto)

  const handleOnAdd = (cantidad)=>{
    console.log("se agrego " + cantidad + " productos")
    console.log(producto)
  }

  const agregarAlCarrito = ()=>{
    valorDelContexto.vaciarCarrito()
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
          <BtnStyled onClick={agregarAlCarrito} style={{fontSize:10}}>Agregar al carrito</BtnStyled>
        
          <ItemCount handleOnAdd={handleOnAdd} />
        </DetailsDiv>

      </ContainerDivs>
       
    </ProductCardContainer>
    
  )
}

export default ItemDetails