import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import { StyledLink } from '../StyledLink';

import { Container, Session, MenuFullScreen, Logo, MenuMobile, FiAlignRightStyled, StyledLinkMobile } from './styles';

import logo from '../../assets/logos/black-logo64.png';

export default function Header({ page }) {
     const [menu, setMenu] = useState('inline');

     function handleMenuMobile() {
          setMenu(menu === 'none' ? 'inline': 'none');
     }

     useEffect(() => {
          setMenu('none')
     }, [])

     return (
          <Container menuMobile={menu}>
               <Logo src={logo} alt=""/>
                    
               <nav>
                    <MenuFullScreen>
                         <Session in={page === "projects" ? 'true' : 'false'}>
                              <StyledLink to="projects">Projetos</StyledLink>
                         </Session>
                         <Session in={page === "solicitations" ? 'true' : 'false'}>
                                   <StyledLink to="solicitations">Solicitações</StyledLink>
                         </Session>
                         <Session in={page === "profile" ? 'true' : 'false'}>
                                   <StyledLink to="profile">Minha empresa</StyledLink>
                         </Session>
                         <Session in={page === "search" ? 'true' : 'false'}>
                                   <StyledLink to="search">
                                        <FiSearch size={22} color="#222" />
                                   </StyledLink>
                         </Session>
                    </MenuFullScreen>
               </nav>

               <MenuMobile display={menu}>
                         <FiAlignRightStyled size={35} color="#555" onClick={handleMenuMobile} />
                         <ul>
                              <StyledLinkMobile to="projects">
                                   <Session inMobile={page === "projects" ? 'true' : 'false'}>
                                        Projetos
                                   </Session>
                              </StyledLinkMobile>

                              <StyledLinkMobile to="solicitations">
                                   <Session inMobile={page === "solicitations" ? 'true' : 'false'}>
                                        Solicitações
                                   </Session>
                              </StyledLinkMobile>

                              <StyledLinkMobile to="profile">
                                   <Session inMobile={page === "profile" ? 'true' : 'false'}>
                                        Minha empresa
                                   </Session>
                              </StyledLinkMobile>

                              <StyledLinkMobile to="search">
                                   <Session inMobile={page === "search" ? 'true' : 'false'}>
                                        Pesquisa
                                   </Session>
                              </StyledLinkMobile>
                         </ul>
                    </MenuMobile>
          </Container>
     );
}
