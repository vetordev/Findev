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
          width: 190px;
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
          height: 50px;
     }

     input:nth-child(2) {
          margin-top: 10px;
     }

     input {
          padding: 0 7px;
          border: 1px solid #999;
          border-radius: 6px;
          background: transparent;
     }

     button {
          margin-top: 30px;
          border: none;
          border-radius: 12px;
          background: #86DFE9;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 2px;
          cursor: pointer;
     }

`;
