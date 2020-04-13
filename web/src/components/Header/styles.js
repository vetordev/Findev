import styled from 'styled-components';

import { FiAlignRight } from 'react-icons/fi';
import { StyledLink } from '../StyledLink';

export const Container = styled.div`
     -webkit-touch-callout: none;
     -webkit-user-select: none;
     -khtml-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     
     height: 170px;
     background: ${props => props.menuMobile === 'none' ? 'transparent' : '#fff'};
     display: flex;
     align-items: center;

     nav {
          width: 100vw;
          display: flex;
          justify-content: center;
     }

     @media (max-width: 940px) {
          height: 100px;
     }
`;

export const Logo = styled.img`
     width: 120px;
     margin: 20px 0 0 40px;
     position: absolute;
     left: 0;
     top: 0;

     @media (max-width: 400px) {
          margin: 20px 0 0 20px;
     }
`;

export const MenuFullScreen = styled.ul`
     display: flex;

     @media (max-width: 940px) {
          display: none;
     }
`;

export const Session = styled.li`
     
     cursor: pointer;
     margin: 30px;
     padding: 2px;
     font-weight: bold;
     font-size: 20px;

     border-bottom: ${props => props.in === 'true' ? '3px solid #222' : 'none' };

     background: ${props => props.inMobile === 'true' ? 'rgba(0, 0, 0, 0.05)' : 'transparent' }
`;

export const MenuMobile = styled.div`
     display: none;

     @media (max-width: 940px){
          cursor: pointer;

          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: right;

          position: absolute;
          right: 0;
          top: 0;
          margin-top: 30px;   

          ul {
               display: ${props => props.display};
               width: 100vw;
               background: #fff;
               margin-top: 15px;
               z-index: 5;
               box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16);
               
          }

          ul li {
               padding: 30px 0;
               margin: 0;
               text-align: center;
               font-size: 14px;
               text-transform: uppercase;
          }
     }
`;

export const FiAlignRightStyled = styled(FiAlignRight)`
     margin-right: 30px;
`;

export const StyledLinkMobile = styled(StyledLink)`
     color: rgba(0, 0, 0, 0.5) !important;
`;