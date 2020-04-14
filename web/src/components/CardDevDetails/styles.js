import styled from 'styled-components';

export const Dev = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;

     img {
          width: 20%;
          margin-bottom: 20px;
     }

     p.devName {
          font-weight: bold;
          font-size: 22px;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 6px;
     }

     p.devAge {
          font-weight: bold;
          font-size: 19px;
          color: rgba(0, 0, 0, 0.23);
          margin-bottom: 30px;
     }

     p.devPosition {
          font-weight: bold;
          font-size: 19px;
          color: rgba(0, 0, 0, 0.8);
          background: #BFF6FF;
          opacity: 0.47;
          padding: 7px 15px;
          margin-bottom: 30px;
     }

     div {
          flex-grow: 0;
          max-width: 55%;
          word-wrap: break-word;
          white-space: pre-wrap;
          text-align: center;
          margin-bottom: 25px;
     }

     p.projectsTitle {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.51);
          font-weight: bold;
     }
`;

export const Skill = styled.span`
     color: rgba(0, 0, 0, 0.27);
     margin: 0 10px;
     line-height: 27px;
     font-weight: 600;

     span {
          color: #86DFE9;
     }
`;

export const Agencies = styled.div`
     img {
          width: 50px;
          margin: 10px 5px;
          border-radius: 12px;
     }
`;