import React, { useState } from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper,LogoCart, MobilIcon } from './NavBar.elements'
import logoAppBar from '../assets/img/Logotipo_sushi_moderno_negro-removebg-preview.png'
import CartWidget from './CartWidget'
import { GiHamburgerMenu, GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom'


const PAGES  =[{to:"/", link:"Home"},{to:"/combinado", link:"Combinado"}, {to:"/tempuras", link:"Tempuras"}, {to:"/postres&bebidas", link:"Postres y Bebidas"}, {to:"/contacto", link:"Contactanos"}]

const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu ] = useState(false)
  return (
    <Container>
        <Wrapper>
            <LogoContainer>
                <img src={logoAppBar} alt='logoSushi' style={{ width: 70, height:"auto" }} />
            </LogoContainer>

            <MobilIcon onClick={()=>setShowMobileMenu(!showMobileMenu)}>
                {
                    showMobileMenu? <GiKnifeFork/> : <GiHamburgerMenu/>
                }
            </MobilIcon>
            <Menu open={showMobileMenu}>

                {PAGES.map((page)=>(
                    <MenuItem>
                    <MenuItemLink>
                        <Link to={page.to} style={{ color: "white", textDecoration: "none"}}>{page.link}</Link>
                    </MenuItemLink>
                </MenuItem>)
                )}

            </Menu>

            <LogoCart>
                <CartWidget/>
            </LogoCart>

        </Wrapper>

    </Container>
  )
}

export default NavBar