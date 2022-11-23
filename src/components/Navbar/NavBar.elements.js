import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 5px 10px;
    background-color: #18191a;
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`
export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
`
export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 960px) {
        background-color: #343a40 ;
        position: absolute;
        top: 100px;
        left: ${({open}) => open ? "0" : "-100%"};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`
export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const MenuItemLink = styled.a`
    display: flex ;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: white;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.2s all ease;

    &:hover{
        color: #ff1616;
        border-radius: 10px;
        transition: 0.2s all ease;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const LogoCart = styled.div`
    position: relative;
    font-size: 1.3rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;


    span{
        position: absolute;
        background-color: red;
        height: 20px;
        width: 20px;
        text-align: center;
        border-radius: 1rem;
        border: 1px solid white;
        top: 45px;
        color: white;
        font-size: 1rem;
    }
`
export const MobilIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: larger;

        svg{
            fill: white;
            margin-right: 0.5rem;
        }
    }
`
