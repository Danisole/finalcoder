import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../ItemDetails/ItemDetails'
import { getProductsById } from '../utils/Utils'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const {productId} = useParams()

    useEffect(()=>{
        getProductsById(productId)
        .then(res=> setProduct(res))
        
    }, [productId])
    console.log(product)
  return (
    <div>
      { !product ? <h1>Cargando...</h1> : <ItemDetails product={product}/> }
    </div>
  )
}

export default ItemDetailContainer