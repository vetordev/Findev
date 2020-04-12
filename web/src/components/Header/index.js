import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { Container, Session, StyledLink } from './styles';

import logo from '../../assets/logos/black-logo64.png';

export default function Header({ page }) {
  return (
    <Container>
         <img src={logo} alt=""/>

         <nav>
              <ul>
                   <Session in={page == "projects" ? true : false}>
                        <StyledLink to="projects">Projetos</StyledLink>
                   </Session>
                   <Session in={page == "solicitations" ? true : false}>
                         <StyledLink to="solicitations">Solicitações</StyledLink>
                   </Session>
                   <Session in={page == "profile" ? true : false}>
                         <StyledLink to="profile">Minha empresa</StyledLink>
                   </Session>
                   <Session in={page == "search" ? true : false}>
                         <StyledLink to="search">
                              <FiSearch size={24} color="#222" />
                         </StyledLink>
                   </Session>
              </ul>
         </nav>
    </Container>
  );
}
