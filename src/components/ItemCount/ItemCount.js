import React, { useState }from 'react';
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { BtnStyled } from '../item/ItemStyled'
import { CountBtnStyled } from '../ItemDetailContainer/ItemDetailsContainerStyled';
import { toast } from 'react-toastify';



const ItemCount = ({handleOnAdd, init, stock}) =>{

    const [count, setCount] = useState(parseInt(init))

    const handlerRestar = (e) =>{
        e.stopPropagation()
        setCount(count - 1 )
    }

    const handlerSumar = (e) =>{
        e.stopPropagation()
        setCount(count + 1 )
    }

    const handlerConfirmar = () =>{

        handleOnAdd(count)

        toast.info('Agrega los productos al carrito', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

   

    return(
        <div>
            <div style={{display:"flex", justifyContent:'center', gap:3}}>
                <CountBtnStyled disabled={count <=1} onClick={handlerRestar}><BsDashCircle/></CountBtnStyled>
                <p>{count}</p>
                <CountBtnStyled disabled={count >= stock} onClick={handlerSumar}><BsPlusCircle/></CountBtnStyled>
            </div>
            <BtnStyled onClick={handlerConfirmar}>Confirmar</BtnStyled>
        </div>
    )
}

export default ItemCount