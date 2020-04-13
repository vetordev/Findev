import React from 'react';

import { Container, DevSkills, Button, CardsContainer, Card } from './styles';

const perfil = 'https://api.adorable.io/avatars/285/abott@adorable.png';

export default function SolicitationCard() {
  return (
          <Card>
               <div className="img">
                    <img src={perfil} alt=""/>
               </div>
               <div className="content">
                    <p className="devName">Vitória Lopes Diogo</p>
                    <DevSkills>
                         <p><span>#</span>Front-end</p>
                         <p><span>#</span>ReactNative</p>
                         <p><span>#</span>ReactJS</p>
                    </DevSkills>

                    <div>
                         <Button>
                              Enviar Solicitação
                         </Button>
                    </div>
               </div>
          </Card>
  );
}
