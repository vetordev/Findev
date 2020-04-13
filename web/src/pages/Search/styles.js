import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 0 300px 50px 300px;

     @media (max-width: 1000px) {
          padding: 0 10px;
     }
`;

export const Content = styled.div`
     width: 100%;
     height: auto;
     background: #fff;
     padding: 60px;
     box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
`;

export const SearchBar = styled.div`
     background: #fff;
     width: 100%;
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