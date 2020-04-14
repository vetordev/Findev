import styled from 'styled-components';

export const Container = styled.div`
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
     z-index: 5;
     display: ${props => props.display ? props.display : 'none'};
     justify-content: center;
     align-items: center;

     background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
     width: 450px;
     height: auto;
     background: #fff;
     border-radius: 15px;
     box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.16);
     padding: 30px;

     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;

`;
