import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { LabelForm, InputForm } from '../Carrito/Form/FormStyled'
import { BtnStyled } from '../item/ItemStyled'

const initialForm ={
    id:"",
}


const Serch = ({handlerSearch}) => {

    const[form, setForm]=useState(initialForm)

    const handlerChange= (e)=>{

        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handlerSubmit = (e)=>{
        e.preventDefault();
       
        if(!form.id){
            toast.success('Ingrese N° de orden', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return
        }

        handlerSearch(form);
        setForm(initialForm)
    }

    
  return (
    
        <form onSubmit={handlerSubmit}>

            <LabelForm>Ingresa el N° de tu compra</LabelForm>
            <InputForm  placeholder='# numero de orden' name="id" onChange={handlerChange} value={form.id} />
            <BtnStyled value="Buscar">Buscar</BtnStyled>

        </form>
        
    
  )
}

export default Serch