import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 150px 50px;

     @media (max-width: 718px) {
          padding: 0 50px 50px;
     }
`;

export const Content = styled.div`
     width: 100%;
     height: auto;
     padding: 60px 70px;

     background: #fff;
     box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
     border-radius: 10px;
`;

export const Agency = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;

     img {
          width: 120px;
          border-radius: 6px;
          margin-right: 20px;
     }

     div#infos-agency h2 {
          font-weight: normal;
          font-size: 25px;
          margin-bottom: 5px;
     }

     div#infos-agency p {
          color: rgba(0, 0, 0, 0.37);
          font-weight: bold;
          font-size: 17px;
          margin-bottom: 12px;
     }

     div#infos-agency p span {
          color: #444;
     }
     
     div#infos-agency span#edit-infos {
          font-size: 14px;
          color: #999;
          border-bottom: 1px solid #999;
     }

     @media (max-width: 650px) {
          flex-direction: column;
          
          div#infos-agency {
               margin-top: 20px;
               text-align: center
          }
     }

`;

export const TitleSession = styled.h1``;

export const Projects = styled.div`

`;

export const Devs = styled.div``;