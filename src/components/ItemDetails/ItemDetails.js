import ItemCount from "../ItemCount/ItemCount"



const ItemDetails = ({product}) => {
  return (
    <>
    <div>{product.title}</div>
    <ItemCount/>
    </>
  )
}

export default ItemDetails