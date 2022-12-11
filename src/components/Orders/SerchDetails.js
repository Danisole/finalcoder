import React from 'react'

const SerchDetails = ({serch, item}) => {

  

  console.log(item)

  console.log(serch)

 

  
  
  if(item){

      return (
              <>
              <h2>existo</h2>
              </>
              
            )

  }else{

    return(

      <h1>No hay nada</h1>
    )
    
  }

      
}

export default SerchDetails