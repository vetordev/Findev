import React from 'react';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import SolicitationCard from '../../components/SolicitationCard';

import { Container, Content, SearchBar } from './styles';

export default function Search() {
  return (
      <>
        <Header page="search" />
        <Container>
          <SearchBar>
            <input type="text" placeholder="Pesquise por um desenvolvedor" />
            <div>
              <FiSearch size={26} color="rgba(0, 0, 0, 0.5)" />
            </div>
          </SearchBar>
          <Content>
            <SolicitationCard />
          </Content>
        </Container>
      </>
  );
}
