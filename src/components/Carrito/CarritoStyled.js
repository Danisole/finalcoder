import styled from "styled-components"


export const ContainerCart = styled.div`
    padding: 100px 40px 10px 40px;
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns:repeat(auto-fit, 400px);
    row-gap: 3.5rem;
    min-height: 100vh;
    
`


export const CheckoutHrStyled = styled.hr`
  margin: 3rem 0;
  max-width: 400px;
`;

export const SubContenedores = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const ContenedorProducto = styled.div`
display: flex;
flex-direction: row;
max-width: 380px;
justify-content: space-between;
margin: 20px 0;
gap: 20px,

p{
  margin: 10px 0;
}
`


export const ContenedorVacio = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
gap: 50px
`


