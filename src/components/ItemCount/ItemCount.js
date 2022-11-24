import React, { useState }from 'react';
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { BtnStyled } from '../item/ItemStyled'
import { CountBtnStyled } from '../ItemDetailContainer/ItemDetailsContainerStyled';



const ItemCount = ({handleOnAdd}) =>{

    const [count, setCount] = useState(0)

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
    }

    return(
        <div>
            <div style={{display:"flex", justifyContent:'center', gap:3}}>
                <CountBtnStyled onClick={handlerRestar}><BsDashCircle/></CountBtnStyled>
                <p>{count}</p>
                <CountBtnStyled onClick={handlerSumar}><BsPlusCircle/></CountBtnStyled>
            </div>
            <BtnStyled onClick={handlerConfirmar} >Confirmar</BtnStyled>
        </div>
    )
}

export default ItemCount