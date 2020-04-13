import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 150px 50px 150px;

     @media (max-width: 718px) {
          padding: 0;
     }
`;

export const Content = styled.div`
     /* width: 100%; */
     height: auto;
     padding: 50px 60px;

     background: #fff;
     box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
     border-radius: 10px;

     @media (max-width: 1075px) {
          padding: 50px 10px;
     }
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

     @media (max-width: 535px) {
          flex-direction: column;

          div#infos-agency {
               text-align: center;
          }

          img {
               margin-right: 0;
               margin-bottom: 20px;
          }
     }
`;

export const TitleSession = styled.h1`
     color: #333;
     font-size: 28px;
     margin-right: 10px;
`;

export const AddButton = styled.button`
     cursor: pointer;
     background: #86DFE9;
     width: 35px;
     height: 35px;
     border: 0;
     border-radius: 12px;
     box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.16);

     display: flex;
     justify-content: center;
     align-items: center;
`;

export const HeaderSession = styled.div`
     display: flex;
     align-items: center;
     flex-direction: row;

     margin-bottom: 20px;
     margin-top: 50px;
     max-width: 100%;
`;

export const Projects = styled.div`

     ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 30px;
     }

     ul li {
          display: flex;
          flex-direction: row;
          box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.16);
          border-radius: 10px;
          padding: 20px 30px;
          max-width: 100% !important;
     }

     ul li div.content {
          margin-right: 10px;
     }

     ul li div.content h3 {
          font-size: 18px;
          margin-bottom: 12px;
     } 

     ul li div.content p {
          color: rgba(0, 0, 0, 0.45);
          line-height: 20px;
          font-size: 15px;
          margin-bottom: 15px;
     }

     ul li div.icons {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          padding: 50px 0;
     }
`;

export const Devs = styled.div`

     ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, min(80px));
          grid-gap: 8px;
     }

     ul li img {
          cursor: pointer;
          width: 80px;
          border-radius: 6px;
          box-shadow: -2px 3px 6px 0 rgba(0, 0, 0, 0.16);
     }
`;