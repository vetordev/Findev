import React, { useState, useEffect } from 'react';

import { Content, Container } from '../Filter';
import GitHubLink from '../GitHubLink';

import { Dev, Skill, Agencies } from './styles';

import img_agency from '../../assets/rocketseat-logo.png';
const perfil = 'https://api.adorable.io/avatars/285/abott@adorable.png';

export default function CardDevDetails({ show, array }) {
     const [cardDisplay, setCardDisplay] = useState('none');

     function closeCardDev() {
          setCardDisplay('none');
     }

     useEffect(() => {
          setCardDisplay('flex')
     }, [show]);

     return (
     <Container display={cardDisplay} onClick={closeCardDev}>
          <Content>
               <Dev>
                    <img src={perfil} alt=""/>
                    <p className="devName">Vitória Lopes Diogo</p>
                    <p className="devAge">16 anos</p>
                    <p className="devPosition">Web Developer</p>

                         <div>
                              {array.data.map(skills =>
                                   <Skill key={skills}><span>#</span>{skills}</Skill>
                              )}
                         </div>

                         <p className="projectsTitle">Já esteve presente em projetos de:</p>
                         <Agencies>
                              <img src={img_agency} alt=""/>
                              <img src={img_agency} alt=""/>
                              <img src={img_agency} alt=""/>
                         </Agencies>
                         <GitHubLink fontSize={18} iconSize={23} link="https://github.com/stoneparker" />
               </Dev>
          </Content>
     </Container>
     );
}
