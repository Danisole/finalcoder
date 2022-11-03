import React, { useState }from 'react';
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { BtnStyled } from '../item/ItemStyled'



const ItemCount = () =>{

    const [count, setCount] = useState(0)

    const handlerSumar = () =>{
        setCount(count + 1 )
    }

    const handlerRestar = () =>{
        setCount(count - 1 )
    }

    const handlerConfirmar = () =>{
        console.log("producto agregado")
    }

    return(
        <div>
            <div>
                <button onClick={handlerSumar}><BsPlusCircle/></button>
                <p>{count}</p>
                <button onClick={handlerRestar}><BsDashCircle/></button>
            </div>
            <BtnStyled onClick={handlerConfirmar}>Confirmar</BtnStyled>
        </div>
    )
}

export default ItemCount