import React from 'react';

import { Container } from './styles';

import logo from '../../assets/logos/white-logo128.png';

export default function Login() {
  return (
    <Container>
      <div>
        <img src={logo} alt=""/>

        <form>
          <input type="text" placeholder="Nome da empresa" />
          <input type="text" placeholder="E-mail" />

          <button type="button">Acessar</button>
        </form>
      </div>
    </Container>
  );
}
