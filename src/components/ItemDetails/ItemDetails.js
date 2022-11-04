import ItemCount from "../ItemCount/ItemCount"
import { ProductosCard } from "../item/ItemStyled"


const ItemDetails = ({product}) => {
  return (
    
    <ProductosCard style={{marginTop:50,background: "none"}}>

     <img src={product.img} alt={product.title}/>
        <h2>{product.title}</h2>
        <p>{product.descripcion}</p>
        <p>${product.precio}</p>
        
    <ItemCount/>
   
    </ProductosCard>
    
  )
}

export default ItemDetails