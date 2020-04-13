import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 0 200px 50px;

     @media (max-width: 1300px) {
          padding: 0 75px;
     }

     @media (max-width: 1150px) {
          padding: 0 37px;
     }

     @media (max-width: 1060px) {
          padding: 0;
     }
`;

export const SearchBar = styled.div`
     background: #fff;
     width: 90%;
     margin: 0 40px 30px 40px;
     box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
     border-radius: 8px;
     padding: 0 20px 0 10px;

     display: flex;
     justify-content: center;
     align-items: center;

     input {
          border: 0;
          width: 100%;
          height: 60px;
     }

     div {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
     }
`;