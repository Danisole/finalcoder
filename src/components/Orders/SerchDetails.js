import React from 'react'
import { toast } from 'react-toastify';
import { BtnStyled } from '../item/ItemStyled';
import { ContainerDetails } from './OrderSaleStyled';
import { deleteDoc, doc} from "firebase/firestore"
import { db } from '../../firebase'


const SerchDetails = ({serch, item}) => {
  

    const findId = item.find((el)=>{
    return el.id === serch.id
  }) 

  let id = serch.id

  const deleteOrder = async(id) =>{
    await deleteDoc(doc(db, "orders", id))

    toast.success('Su pedido fue suspendido satisfactoriamente', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  }


  if(findId){

      return (
              <>
                <h2>Estado de tu compra</h2>

                  <ContainerDetails key={findId.id}>
                      <p>Numero de orden: {findId.id}</p>
                      <p>Cliente: {findId.buyer.name}</p>
                      <p>Productos: {findId.products[0].title}</p>
                      <p>Total: ${findId.total}</p>
                      <p>ESTADO: En preparacion...</p>
                      <BtnStyled style={{fontSize: 10}}
                      onClick={()=>deleteOrder(id)}
                      >Boton de arrepentimiento</BtnStyled>                      
                      
                  </ContainerDetails>
               
              </>
              
            )

  }else if(findId === undefined){

           toast.success('El N° ingresado no es correcto', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
      
  }

      
}

export default SerchDetails