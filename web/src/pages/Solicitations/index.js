import React, { useState } from 'react';

import Header from '../../components/Header';
import SolicitationCard from '../../components/SolicitationCard';
import { CardsContainer } from '../../components/SolicitationCard/styles';
import { Content } from '../../components/Content';

import { Container, Sessions } from './styles';

export default function Solicitations() {
  const [sent, setSent] = useState('active');
  const [received, setReceived] = useState('disabled');

  function handleActive() {
    setSent(sent === 'active' ? 'disabled' : 'active');
    setReceived(received === 'active' ? 'disabled' : 'active');
  }

  return (
    <>
      <Header page="solicitations" />
      <Container>
        <Sessions>
          <div id={sent} onClick={handleActive}>Enviados</div>
          <div id={received} onClick={handleActive}>Recebidos</div>
        </Sessions>
        <Content width="90%">
          <CardsContainer>
            <SolicitationCard />
            <SolicitationCard />
            <SolicitationCard />
            <SolicitationCard />
          </CardsContainer>
        </Content>    
      </Container>
    </>
  );
}
