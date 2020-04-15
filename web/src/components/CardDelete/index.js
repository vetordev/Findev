import React, { useState, useEffect } from 'react';

import { Content, Container } from '../Filter';
import { Delete, Button } from './styles';

export default function CardDelete({ show }) {
     const [cardDisplay, setCardDisplay] = useState('none');

     function closeCardDev() {
          setCardDisplay('none');
     }

     useEffect(() => {
          setCardDisplay('flex')
          // alert(cardDisplay)
     }, [show]);

     return (
          <Container display={cardDisplay} onClick={closeCardDev}>
               <Content>
                    <Delete>
                         <p className="question">Você deseja mesmo 
                              <span className="excluir"> excluir </span> 
                              <span className="item">Bootcamp GoStack</span>
                         ?</p>

                         <p className="confirm">Essa ação não poderá ser desfeita.</p>

                         <div>
                              <Button type="cancel" onClick={closeCardDev}>Cancelar</Button>
                              <Button type="confirm" onClick={closeCardDev}>Excluir</Button>
                         </div>
                    </Delete>
               </Content>
          </Container>
     );
}
