import React from 'react';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import SolicitationCard from '../../components/SolicitationCard';
import { Content } from '../../components/Content';

import { Container, SearchBar } from './styles';

export default function Search() {

  const array = {
    data: [
      "All",
      "Health",
      "Business",
      "Entertainment",
      "Sports",
      "Technology",
      "Science",
    ]
  }

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
          <Content width='90%'>
              <SolicitationCard messageBtn1="Enviar solicitação" array={array} />
          </Content>
        </Container>
      </>
  );
}
