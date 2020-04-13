import styled from 'styled-components';

export const CardsContainer = styled.div`
     font-size: 10px;
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
     grid-gap: 30px;
`;

export const Card = styled.div`
          display: flex;
          justify-content: center;
          background: #fff;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.16);
          padding: 15px 20px;

          display: flex;
          align-items: center;
          
     div.img img {
          width: 90px;
          margin-right: 20px;
          border-radius: 6px;
          box-shadow: -2px 3px 10px 0 rgba(0, 0, 0, 0.16);
     }

     div.content p.devName {
          font-weight: bold;
          margin-bottom: 5px;
          font-size: 2em;
          color: rgba(0, 0, 0, 0.7);
     }

     div.content div {
          display: flex;
          align-items: center;
          justify-content: center;

          /* width: 100%; */
     }

     @media (max-width: 360px) {
          padding: 15px 0px;
          
          div.content p.devName {
               font-size: 1.7em;
               text-align: center; 
          }

          div.img img {
               width: 80px;
               margin-right: 10px;
          }
     }
`;

export const DevSkills = styled.div`
     display: flex;
     /* font-weight: bold; */
     margin-bottom: 15px;
     font-size: 1.3em;

     p {
          color: rgba(0, 0, 0, 0.3);
          margin-right: 3px;
     }

     span {
          color: #86DFE9;
     }

     @media (max-width: 360px) {
          flex-direction: column;
          
          p {
               margin-bottom: 5px;
          }
     }
`;

export const Button = styled.button`
     cursor: pointer;
     width: 90%;
     height: 35px;
     border: 2px solid #86DFE9;
     background: transparent;
     border-radius: 12px;

     text-transform: uppercase;
     font-weight: bold !important;
     color: rgba(0, 0, 0, 0.6);
     font-size: 1em;
     transition: 0.2s;

     :hover {
          color: #fff;
          background: #86DFE9;
          border: 0;
     }
`;