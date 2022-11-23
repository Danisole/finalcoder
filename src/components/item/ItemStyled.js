import styled from "styled-components";


export const ProductosCard = styled.div`
background-color: #212529 ;
width: 300px;
height: 400px;
border-radius: 15px;
padding: 1rem;
margin-top: 5vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:hover{
box-shadow: 10px 10px 15px #202020;
}


img{
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 7px;
}
h2{
    font-weight: 600;
    margin: 0;
    display: flex;
    text-align: center;
    color: #b2b2b2;
}
p{
    color: #b2b2b2;
    font-size: 1.2rem;
    margin: 8px;
}
`
export const BtnStyled = styled.button` 
padding: 0.8rem 1.5rem;
outline: none;
border: none;
border-radius: 10px;
background-color: #bf0603;
color: white;
text-transform: uppercase;
font-weight: 400;
cursor: pointer;
&:hover{
    background-color: #ef233c ;
}
`
