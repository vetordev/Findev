import styled from 'styled-components';

export const Container = styled.div`
     background: #121212;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;

     div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100vw;
     }

     img {
          width: 150px;
          margin-bottom: 30px;
     }

     form {
          width: 100%;
          max-width: 500px;
          height: 350px;
          background: #F6F6F6;
          border-radius: 10px;
          padding: 60px 80px;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
     }

     input, button {
          width: 100%;
          height: 55px;
     }

     input:nth-child(2) {
          margin-top: 10px;
     }

     button {
          margin-top: 30px;
          border: none;
          border-radius: 12px;
          background: #86DFE9;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.5px;
          cursor: pointer;
          font-size: 18px;
     }


     /* RESPONSIVIDADE */
     @media (max-width: 490px) {
          form {
               padding: 60px 40px;
          }
     }

`;
