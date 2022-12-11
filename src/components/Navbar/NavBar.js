import React, { useState } from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, MobilIcon, LogoCart } from './NavBar.elements'
import logoAppBar from '../assets/img/Logotipo_sushi_moderno_negro-removebg-preview.png'
import CartWidget from './CartWidget'
import { GiHamburgerMenu, GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom'




const PAGES  =[{id: 1, to:"/", link:"Home"},{id: 2, to:"/category/combinados", link:"Combinado"}, {id: 3, to:"/category/tempuras", link:"Tempuras"}, {id: 4, to:"/category/postres&bebidas", link:"Postres y Bebidas"}, {id: 5, to:"/orderSale", link:"Compras"}]

const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu ] = useState(false)
  return (
    <Container>
        <Wrapper>
            
            <LogoContainer>
                <Link to="/">
                    <img src={logoAppBar} alt='logoSushi' style={{ width: 70, height:"auto" }} />

                </Link>
            </LogoContainer>

            <MobilIcon onClick={()=>setShowMobileMenu(!showMobileMenu)}>
                {
                    showMobileMenu? <GiKnifeFork/> : <GiHamburgerMenu/>
                }
            </MobilIcon>
            <Menu open={showMobileMenu}>

                {PAGES.map((page)=>(
                    <MenuItem key={page.id}>
                    <Link  to={page.to} style={{ textDecoration: "none"}}>
                        <MenuItemLink>{page.link}</MenuItemLink>
                    </Link>
                    
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
