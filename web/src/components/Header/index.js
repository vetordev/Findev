import React from 'react';
import { FiSearch, FiAlignRight } from 'react-icons/fi';

import { StyledLink } from '../StyledLink';

import { Container, Session, MenuFullScreen, Logo, MenuMobile } from './styles';

import logo from '../../assets/logos/black-logo64.png';

export default function Header({ page }) {
  return (
    <Container>
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

         <MenuMobile>
               <FiAlignRight size={26} color="#222" />
               <ul>
                    <Session>oi</Session>
                    <Session>oi</Session>
                    <Session>oi</Session>
                    <Session>oi</Session>
               </ul>
          </MenuMobile>
    </Container>
  );
}
