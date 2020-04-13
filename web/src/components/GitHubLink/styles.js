import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
`;

export const LinkI = styled.span`
     @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300;1,400&display=swap');

     font-family: 'Lato', sans-serif;
     font-style: italic;
     color: rgba(0, 0, 0, 0.59);
     margin-left: 7px;
     font-size: ${props => props.size}px;
`;