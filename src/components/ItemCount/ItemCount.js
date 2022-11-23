import React, { useState }from 'react';
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { BtnStyled } from '../item/ItemStyled'



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
            <div style={{display:"flex"}}>
                <BtnStyled onClick={handlerRestar}><BsDashCircle/></BtnStyled>
                <p>{count}</p>
                <BtnStyled onClick={handlerSumar}><BsPlusCircle/></BtnStyled>
            </div>
            <BtnStyled onClick={handlerConfirmar} >Confirmar</BtnStyled>
        </div>
    )
}

export default ItemCount