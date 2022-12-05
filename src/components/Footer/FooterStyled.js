import styled from "styled-components"



export const ContainerFooter = styled.footer`
    position: absolute;
    margin-bottom: 0;
    width: 100%;
    height: 90px;
    padding: 5px 10px;
    margin-top: 20px;
    background-color: #18191a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    p{
        font-size: 13px;
        margin: 5px 0;
        
    }
    a{
        cursor: pointer;
        color: white;

        &:hover{
            color: red;
        }
    }
    
`

export const FooterSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding: 10px 0;
    word-spacing: 4px;
    letter-spacing: 3px;

`