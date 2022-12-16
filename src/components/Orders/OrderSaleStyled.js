import styled from "styled-components"


export const ContainerSale = styled.div`
    padding: 100px 40px 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 15px;
`   

export const ContainerDetails = styled(ContainerSale)`
margin-top: 15px;
min-height: 0;
padding: 0;
align-items: flex-start;
gap: 10px;
`