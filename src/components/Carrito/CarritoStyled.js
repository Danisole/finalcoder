import styled from "styled-components"



export const ContainerCart = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 30px;

`

export const CheckoutContainerProductosStyled = styled.div`
  width: 50%;
  

`;

export const CheckoutContainerPriceStyled = styled.p`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckoutSubtotalStyled = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10rem 0;
  min-height: 100vh;
`;

export const ProductCardContainerCarrito = styled.article`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    

    p{
        color: #b2b2b2;
        font-size: 0.9rem;
        margin: 0 40px;
        
    }
   
`
