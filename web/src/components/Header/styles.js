import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
     height: 120px;

     display: flex;
     align-items: center;

     img {
          width: 120px;
          margin-left: 40px;
     }

     nav {
          width: 100vw;
          display: flex;
          justify-content: center;
     }

     nav ul {
          display: flex;
     }
`;

export const Session = styled.li`
     
     cursor: pointer;
     margin: 24px;
     padding: 5px;
     font-weight: bold;
     font-size: 20px;

     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: flex-end;


     border-bottom: ${props => props.in ? '3px solid #222' : 'none' }
`;

export const StyledLink = styled(Link)`
     text-decoration: none;

     :focus, :hover, :visited, :link, :active {
          text-decoration: none;
          color: #222;
     }
`;