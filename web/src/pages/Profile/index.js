import React from 'react';
import { FiPlus, FiTrash2, FiEdit, FiPower } from 'react-icons/fi';

import Header from '../../components/Header';
import GitHubLink from '../../components/GitHubLink';
import { StyledLink } from '../../components/StyledLink';
import { Content } from '../../components/Content';

import { Container, Agency, Projects, Devs, TitleSession, AddButton, HeaderSession, Logout } from './styles';

import img_agency from '../../assets/rocketseat-logo.png';
const perfil = 'https://api.adorable.io/avatars/285/abott@adorable.png';

export default function Profile() {
  return (
    <>
      <Header page="profile" />
      <Container>
        <Content width="auto">
          <Logout>
            <StyledLink to="/"><FiPower size={20} color="#000" /></StyledLink>
          </Logout>
          <Agency>
            <img src={img_agency} alt=""/>
            <div id="infos-agency">
              <h2>Rocketseat</h2>
              <p><span>E-mail: </span>oi@rocketseat.com.br</p>
              <span id="edit-infos">Editar informações</span>
            </div>
          </Agency>

          <Projects>
            <HeaderSession>
              <TitleSession>Projetos</TitleSession>
                <AddButton>
                  <FiPlus size={28} color="#fff" />
                </AddButton>
            </HeaderSession>

            <ul>
              <li>
                <div className="content">
                  <h3>Bootcamp GoStack</h3>
                  <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>
                  <GitHubLink iconSize={20} fontSize={16} link="https://github.com/stoneparker"/>
                </div>
                <div className="icons">
                  <FiEdit size={24} color="#CFCFCF" />
                  <FiTrash2 size={24} color="#CFCFCF" />
                </div>
              </li>

              <li>
                <div className="content">
                  <h3>Bootcamp GoStack</h3>
                  <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>
                  <GitHubLink iconSize={20} fontSize={16} link="https://github.com/stoneparker"/>
                </div>
                <div className="icons">
                  <FiEdit size={24} color="#CFCFCF" />
                  <FiTrash2 size={24} color="#CFCFCF" />
                </div>
              </li>

              <li>
                <div className="content">
                  <h3>Bootcamp GoStack</h3>
                  <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>
                  <GitHubLink iconSize={20} fontSize={16} link="https://github.com/stoneparker"/>
                </div>
                <div className="icons">
                  <FiEdit size={24} color="#CFCFCF" />
                  <FiTrash2 size={24} color="#CFCFCF" />
                </div>
              </li>

              <li>
                <div className="content">
                  <h3>Bootcamp GoStack</h3>
                  <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>
                  <GitHubLink iconSize={20} fontSize={16} link="https://github.com/stoneparker"/>
                </div>
                <div className="icons">
                  <FiEdit size={24} color="#CFCFCF" />
                  <FiTrash2 size={24} color="#CFCFCF" />
                </div>
              </li>
            </ul>
          </Projects>

          <Devs>
            <HeaderSession>
              <TitleSession>Desenvolvedores</TitleSession>
              <StyledLink to="search">
                <AddButton>
                  <FiPlus size={28} color="#fff" />
                </AddButton>
              </StyledLink>
            </HeaderSession>

            <div className="ul">
              <ul>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
                <li>
                  <img src={perfil} alt=""/>
                </li>
              </ul>
            </div>
          </Devs>
        </Content>
      </Container>
    </>
  );
}
