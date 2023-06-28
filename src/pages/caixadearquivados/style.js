import styled from "styled-components";

// TB - TopBar
// ME  - NenuEsquerda
// CS - Consultas

export const Grid = styled.div`
    display: grid;
    background: #1c408a;
    grid-template-columns: 300px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
        'TB TB'
        'ME ME'
    ;
    height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5;
  color: white;
  margin-left: 12px;
`;
