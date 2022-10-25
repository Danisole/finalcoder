import React, { useState, useTransition } from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper,LogoCart, MobilIcon } from './NavBar.elements'
import logoAppBar from '../assets/img/Logotipo_sushi_moderno_negro-removebg-preview.png'
import CartWidget from './CartWidget'
import { GiHamburgerMenu, GiKnifeFork } from "react-icons/gi";


const PAGES  =["Home","Nosotros", "Productos", "Contactanos"]

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
                        {page}
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
