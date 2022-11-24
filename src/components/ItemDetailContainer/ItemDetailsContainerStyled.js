import styled from "styled-components";

export const ContenedorDetails = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

`
export const ProductCardContainer = styled.div`
    width: 400px;
    height: 300px;
    padding: 1rem;
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;

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
        margin: 6px;
    }

    @media screen and (max-width: 780px){
    width: 100%;
    max-width: 780px;
    height: 80%;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    }

    
`
export const ContainerDivs = styled.div`
    width: 400px;
    height: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`
export const DetailsDiv = styled.div`
    width: 300px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const CountBtnStyled = styled.button` 
padding: 0.2rem 0.5rem;
margin: 4px;
outline: none;
border: none;
border-radius: 8px;
background-color: #bf0603;
color: white;
text-transform: uppercase;
font-weight: 100;
cursor: pointer;

&:hover{
    background-color: #ef233c ;
}
`
