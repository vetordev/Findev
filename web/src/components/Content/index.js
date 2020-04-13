import styled from 'styled-components';

export const Content = styled.div`
     width: ${props => props.width};
     
     height: auto;
     background: #fff;
     border-radius: 10px;
     padding: 50px 60px;
     margin-bottom: 50px;
     box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);

     @media (max-width: 1075px) {
          padding: 50px 0px;
     }
`;
