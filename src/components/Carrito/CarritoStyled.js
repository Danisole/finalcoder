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
  width: 40%;
  

`;

export const CheckoutContainerPriceStyled = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckoutSubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutEnvioStyled = styled(CheckoutSubtotalStyled)``;

export const CheckoutTotalStyled = styled(CheckoutSubtotalStyled)``;

export const CheckoutHrStyled = styled.hr`
  margin: 4rem 0;
`;
export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10rem 3rem;
  min-height: 100vh;
`;

export const ProductCardContainerCarrito = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    img{
    width: 60%;
    margin-bottom: 1rem;
    border-radius: 7px;
    
    }
    h4{
        font-weight: 500;
        margin: 0 25px;
        display: flex;
        text-align: center;
        color: #b2b2b2;
    }
    p{
        color: #b2b2b2;
        font-size: 0.9rem;
        margin: 0 40px;
        
    }
   
`
