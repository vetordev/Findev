import React from 'react';

import Header from '../../components/Header';
import SolicitationCard from '../../components/SolicitationCard';

import { Container, Content } from './styles';

export default function Solicitations() {
  return (
    <>
      <Header page="solicitations" />
      <Container>
        <Content>
        </Content>    
      </Container>
    </>
  );
}
