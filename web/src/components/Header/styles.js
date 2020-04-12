import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
     height: 170px;

     display: flex;
     align-items: center;

     nav {
          width: 100vw;
          display: flex;
          justify-content: center;
     }
`;

export const Logo = styled.img`
     width: 120px;
     margin: 20px 0 0 40px;
     position: absolute;
     left: 0;
     top: 0;
`;

export const MenuFullScreen = styled.ul`
     display: flex;
`;

export const Session = styled.li`
     
     cursor: pointer;
     margin: 30px;
     padding: 2px;
     font-weight: bold;
     font-size: 20px;

     border-bottom: ${props => props.in ? '3px solid #222' : 'none' }
`;


export const StyledLink = styled(Link)`
     text-decoration: none;

     :focus, :hover, :visited, :link, :active {
          text-decoration: none;
          color: #222;
     }
`;

export const MenuMobile = styled.div`
     position: absolute;
     right: 0;
     top: 0;   

     display: none;
`;