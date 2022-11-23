import ItemCount from "../ItemCount/ItemCount"
import { BtnStyled, ProductosCard } from "../item/ItemStyled"
import { useContext } from "react"
import { contexto } from "../CustomProvider"


const ItemDetails = ({product}) => {
  
  const valorDelContexto = useContext(contexto)

  const handleOnAdd = (cantidad)=>{
    console.log("se agrego " + cantidad + " productos")
    console.log(product)
  }

  const agregarAlCarrito = ()=>{
    valorDelContexto.vaciarCarrito()
  }
  return (
    
    <ProductosCard style={{marginTop:50,background: "none"}}>

     <img src={product.img} alt={product.title}/>
        <h2>{product.title}</h2>
        <p>{product.descripcion}</p>
        <p>${product.precio}</p>
        <BtnStyled onClick={agregarAlCarrito}>Agregar al carrito</BtnStyled>
        
    <ItemCount handleOnAdd={handleOnAdd} />
   
    </ProductosCard>
    
  )
}

export default ItemDetails