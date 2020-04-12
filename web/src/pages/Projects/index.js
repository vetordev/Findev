import React from 'react';

import Header from '../../components/Header';

import { Container, Cards, Card } from './styles';

import img_agency from '../../assets/rocketseat-logo.png';

const perfil = 'https://api.adorable.io/avatars/285/abott@adorable.png';

export default function Projects() {
  return (
      <>
        <Header page="projects" />
        <Container>
          <Cards>
            <Card>
              <div className="header">
                <img src={img_agency} alt=""/>
                <div className="header-text">
                  <h1>Bootcamp GoStack</h1>
                  <p>Rocketseat</p>
                </div>
              </div>

              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>

              <div className="footer">
                <div className="images">
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                </div>
                <p>e mais 3...</p>
              </div>
            </Card>
            <Card>
            <div className="header">
                <img src={img_agency} alt=""/>
                <div className="header-text">
                  <h1>Bootcamp GoStack</h1>
                  <p>Rocketseat</p>
                </div>
              </div>

              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>

              <div className="footer">
                <div className="images">
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                </div>
                <p>e mais 3...</p>
              </div>
            </Card>
            <Card>
            <div className="header">
                <img src={img_agency} alt=""/>
                <div className="header-text">
                  <h1>Bootcamp GoStack</h1>
                  <p>Rocketseat</p>
                </div>
              </div>

              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>

              <div className="footer">
                <div className="images">
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                </div>
                <p>e mais 3...</p>
              </div>
            </Card>
            <Card>
            <div className="header">
                <img src={img_agency} alt=""/>
                <div className="header-text">
                  <h1>Bootcamp GoStack</h1>
                  <p>Rocketseat</p>
                </div>
              </div>

              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>

              <div className="footer">
                <div className="images">
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                </div>
                <p>e mais 3...</p>
              </div>
            </Card>
            <Card>
            <div className="header">
                <img src={img_agency} alt=""/>
                <div className="header-text">
                  <h1>Bootcamp GoStack</h1>
                  <p>Rocketseat</p>
                </div>
              </div>

              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>

              <div className="footer">
                <div className="images">
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                </div>
                <p>e mais 3...</p>
              </div>
            </Card>
            <Card>
            <div className="header">
                <img src={img_agency} alt=""/>
                <div className="header-text">
                  <h1>Bootcamp GoStack</h1>
                  <p>Rocketseat</p>
                </div>
              </div>

              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>

              <div className="footer">
                <div className="images">
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                </div>
                <p>e mais 3...</p>
              </div>
            </Card>
            <Card>
            <div className="header">
                <img src={img_agency} alt=""/>
                <div className="header-text">
                  <h1>Bootcamp GoStack</h1>
                  <p>Rocketseat</p>
                </div>
              </div>

              <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry, has been the industry's standard dummy text ever since the 1500s.</p>

              <div className="footer">
                <div className="images">
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                  <img src={perfil} alt=""/>
                </div>
                <p>e mais 3...</p>
              </div>
            </Card>
          </Cards>
        </Container>
      </>
  );
}
