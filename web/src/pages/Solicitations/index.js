import React, { useState } from 'react';

import Header from '../../components/Header';
import SolicitationCard from '../../components/SolicitationCard';
import { Content } from '../../components/Content'; 

import { Container, Sessions } from './styles';

export default function Solicitations() {
  const [sent, setSent] = useState('active');
  const [received, setReceived] = useState('disabled');

  function handleActive() {
    setSent(sent === 'active' ? 'disabled' : 'active');
    setReceived(received === 'active' ? 'disabled' : 'active');
  }

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
    
    {/* <CardDevDetails/> */}
      <Header page="solicitations" />
      <Container>
        <Sessions>
          <div id={sent} onClick={handleActive}>Enviados</div>
          <div id={received} onClick={handleActive}>Recebidos</div>
        </Sessions>
        <Content width="90%">
            <SolicitationCard messageBtn1="Aceitar solicitação" messageBtn2="Cancelar solicitação" array={array} />
        </Content>    
      </Container>
    </>
  );
}
