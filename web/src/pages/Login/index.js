import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logos/white-logo128.png';

export default function Login() {
  const history = useHistory();

  function handleLogin() {
    history.push('/projects');
  }

  return (
    <Container>
      <div>
        <img src={logo} alt=""/>

        <form>
          <input type="text" placeholder="Nome da empresa" />
          <input type="text" placeholder="E-mail" />

          <button type="button" onClick={handleLogin} >Acessar</button>
        </form>
      </div>
    </Container>
  );
}
