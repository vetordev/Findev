import React, { useState } from 'react';

import { DevSkills, Button, Card, CardsContainer } from './styles';
import CardDevDetails from '../CardDevDetails';

const perfil = 'https://api.adorable.io/avatars/285/abott@adorable.png';

export default function SolicitationCard({ messageBtn1, messageBtn2, array }) {
     const [show, setShowCardDev] = useState('');

     function openCardDev() {
          setShowCardDev(<CardDevDetails array={array} show={show} />);
     }

     return (
     <>
          {show}
          <CardsContainer>
               {array.data.map(dev =>
                    <Card  key={dev}>
                         <div className="img">
                              <img src={perfil} alt="" />
                         </div>
                         <div className="content">
                              <p className="devName" onClick={openCardDev}>Vitória Lopes Diogo</p>
                              <DevSkills>
                                   <p><span>#</span>Front-end</p>
                                   <p><span>#</span>ReactNative</p>
                                   <p><span>#</span>ReactJS</p>
                              </DevSkills>
                              <div>
                                   {/* { messageBtn2 ? <Button>{messageBtn2}</Button> : '' }     */}
                                   <Button>
                                        {messageBtn1}
                                   </Button>
                              </div>
                         </div>
                    </Card>
               )}
          </CardsContainer>
     </>
     );
}
