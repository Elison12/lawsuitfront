import styled from 'styled-components';

export const Container = styled.div`
    grid-area: TB;
    background-color: #2e3138;
    display: flex;
    place-items: center;
    justify-content: space-between;
    position: initial;
    /* border-bottom: 2px solid #7ea1ed; */
    width: 100%;

    h2 {
        color: white;
        font-weight: bold;
        font-size: 20px;
        margin-left:600px;
        margin-top: 8px;
        margin-right: 8px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }

    div {
        display: 'flex';
        flex-direction: 'row';
        justify-content: 'space-between'
    }

`;

export const Text = styled.div`
  font-size: 2.5;
  color: white;
  margin-left: 12px;
`;

export const Image = styled.img`
    width: 200px;
    margin-top: 5px;
    margin-left: 12px;

 
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  margin-right: 12px;
  border-color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 2.5;
  color: white;
  margin-left: 12px;
`;


export const User = styled.div`
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;