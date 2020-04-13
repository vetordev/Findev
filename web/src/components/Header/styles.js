import styled from 'styled-components';

export const Container = styled.div`
     -webkit-touch-callout: none;
     -webkit-user-select: none;
     -khtml-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     
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

     border-bottom: ${props => props.in === 'true' ? '3px solid #222' : 'none' }
`;

export const MenuMobile = styled.div`
     position: absolute;
     right: 0;
     top: 0;   

     display: none;
`;