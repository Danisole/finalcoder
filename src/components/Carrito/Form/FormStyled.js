import styled from "styled-components";



export const LabelForm = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 20px;
`
export const InputForm = styled.input`
width: 250px;
height: 32px;
border-radius: 5px;
border-color: #e5e5e5;
font-size: medium;
padding: 3px;
margin-bottom: 10px;
`

export const ContenedorForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
gap: 50px
`
export const ContainerResum = styled.div`
    padding: 0 40px 10px 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;
    min-height: 100vh;
    
`
export const TextStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    h4, h3{
        margin: 20px 0;
    }
    

`
export const CopyButton = styled.button`
    background: none;
    border-color: red;
    color: white;
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
`