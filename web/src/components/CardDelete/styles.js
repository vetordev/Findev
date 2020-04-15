import styled from 'styled-components';

export const Delete = styled.div`
     text-align: center;

     p.question {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.7);
          font-weight: bold;
     }

     p.question span.excluir {
          color: #D11313;
     }

     p.question span.item {
          color: #000;
     }

     p.confirm {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          margin: 15px 0 25px;
     }

     div {
          display: flex;
          justify-content: center;
          align-items: center;
     }
`;

export const Button = styled.button`
     cursor: pointer;
     margin: 0 5px;
     height: 45px;
     width: 30%;
     border-radius: 8px;
     border: ${props => props.type === 'cancel' ? '2px solid #929292' : 0 };
     background: ${props => props.type === 'cancel' ? 'transparent' : '#B20E0E' };
     opacity: 0.68;

     font-size: 15px;
     color: ${props => props.type === 'cancel' ? '#929292' : '#fff' };
     text-transform: uppercase;
     font-weight: bold;
`;
