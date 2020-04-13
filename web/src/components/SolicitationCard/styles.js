import styled from 'styled-components';

export const Container = styled.div`
     ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
          grid-gap: 35px;
     }

     li {
          display: flex;
          flex-grow: 0;
          justify-content: center;
          background: #fff;
          height: 150px;
          border-radius: 15px;
          box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.16);
          padding: 10px 20px;

          display: flex;
          align-items: center;
     }

     li div.img img {
          width: 90px;
          margin-right: 20px;
          border-radius: 6px;
          box-shadow: -2px 3px 10px 0 rgba(0, 0, 0, 0.16);
     }

     li div.content p.devName {
          font-weight: bold;
          margin-bottom: 5px;
          font-size: 20px;
          color: rgba(0, 0, 0, 0.7);
     }

     li div.content div {
          display: flex;
          align-items: center;
          justify-content: center;

          /* width: 100%; */
     }
`;

export const DevSkills = styled.div`
     display: flex;
     /* font-weight: bold; */
     margin-bottom: 15px;

     p {
          color: rgba(0, 0, 0, 0.3);
          margin-right: 3px;
     }

     span {
          color: #86DFE9;
     }
`;

export const Button = styled.button`
     cursor: pointer;
     width: 190px;
     height: 35px;
     border: 2px solid #86DFE9;
     background: transparent;
     border-radius: 12px;

     text-transform: uppercase;
     font-weight: bold !important;
     color: rgba(0, 0, 0, 0.6);
     font-size: 11px;
     transition: 0.2s;

     :hover {
          color: #fff;
          background: #86DFE9;
          border: 0;
     }
`;