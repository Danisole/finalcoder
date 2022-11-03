import { productosIniciales } from '../data/Products'

export const getProducts = () =>{
    let simulacionPedido = new Promise((res) =>{
        setTimeout(() =>{
            res(productosIniciales)
        }, 2000)
    })

    return simulacionPedido
}

export const getProductsByCat = (category) =>{
    let simulacionPedido = new Promise((res) =>{
        setTimeout(() =>{
            res(productosIniciales.filter(item=>item.cat === category))
        }, 1000)
    })

    return simulacionPedido
}