import styled from "styled-components";


export const ProductosCard = styled.div`
background-color: white;
width: 300px;
height: 400px;
border-radius: 15px;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    width: 100%;
    margin-bottom: 1rem;
}
h2{
    font-weight: 600;
    margin: 0;
    display: flex;
    text-align: center;
    color: #666;
}
p{
    color: #666;
    font-size: 1.2rem;
}
`
export const BtnStyled = styled.button` 
padding: 0.8rem 1.5rem;
outline: none;
border: none;
border-radius: 10px;
background-color: red;
color: white;
text-transform: uppercase;
font-weight: 400;
cursor: pointer;
`
