import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 0 150px 50px 150px;

     @media (max-width: 718px) {
          padding: 0;
     }
`;

export const Sessions = styled.div`
     width: 100%;
     /* padding: 0 60px; */

     display: flex;
     justify-content: center;
     align-items: center;

     div {
          cursor: pointer;
          height: 50px;
          width: 30%;
          border-radius: 12px 12px 0 0;
          margin: 0 50px;

          font-weight: bold;
          font-size: 20px;

          display: flex;
          align-items: center;
          justify-content: center;
     }

     div#active {
          background: #000;
          color: #fff;
     }

     div#disabled {
          background: rgba(0, 0, 0, 0.1);
          color: rgba(255, 255, 255, 0.6);
     }
`;
