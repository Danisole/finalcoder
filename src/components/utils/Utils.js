import { productosIniciales } from '../data/Products'


const generatePromise = (operation, time = 1500)=>{

    return  new Promise((res) =>{
        setTimeout(() =>{
            res(operation)
        }, time)
    })
}

export const getProducts = () =>{
    const simulacionPedido = generatePromise(productosIniciales)
    return simulacionPedido
}

export const getProductsByCat = (category) =>{
    const simulacionPedido = generatePromise(productosIniciales.filter(item=>item.category === category))
    return simulacionPedido
}

export const getProductsById = (id)=>{
    return new Promise((res)=>{
        setTimeout(() =>{
            res((productosIniciales.find(item=>item.id === id)))
        }, 1000)
    })
}