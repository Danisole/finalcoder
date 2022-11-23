import ItemCount from "../ItemCount/ItemCount"
import { BtnStyled, ProductosCard } from "../item/ItemStyled"
import { useContext } from "react"
import { contexto } from "../CustomProvider"


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
    
    <ProductosCard style={{marginTop:50,background: "none"}}>

     <img src={producto.img} alt={producto.title}/>
        <h2>{producto.title}</h2>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        <BtnStyled onClick={agregarAlCarrito}>Agregar al carrito</BtnStyled>
        
    <ItemCount handleOnAdd={handleOnAdd} />
   
    </ProductosCard>
    
  )
}

export default ItemDetails