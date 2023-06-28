import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
    justify-items: space-between;
    width: 1000px;
    margin-left: 70%;
   /* button{
    display: flex;
    flex-direction: row;
    position:fixed;
    border: 1px solid transparent;
    padding: 1px 5px;
    margin-top: 10px;
    background-color: #D190EE;
    color: white;
    height: 40px;
    border-radius: 20px;
    bottom: 10px;
    font-size: 1.3vw;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    text-align: center;
    align-self: flex-end;
    width: 16%;
 
    cursor: pointer;
    :hover{
      transition: all linear 0.3s;
      color: #E5F3ED;
      background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #D190EE; */
    /* }
   
    @media (max-width: 1310px) {
        width: 18%;
        font-size: 1.2vw;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        width: 30%;
        font-size: 1.8vw;
    }
   } */
`;
export const ProcessoModel = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),URL(${(props) => props.backgroundImg});
    border-radius: 10px;
    height: 120px;
    margin-top: 20px;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;

    h1{
        color: white;
        display: flex;
        margin-left: 20px;
        align-items: center;
    }
`;


export const ProcessBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    margin: 1rem;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),URL(${(props) => props.backgroundImg});
    justify-content: space-between;
    cursor: pointer;
    h1{
        color: white;
        display: flex;
        margin-left: 20px;
        align-items: center;
    }

    .flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-box {
  background-color: yellow;
  height: 300px;
}

.content-box {
  background-color: black;
  color: white;
  text-align: center;
  width: 200px;
}
`;

export const Title = styled.h1`
  font-size: 2.5;
  margin-bottom: 2rem;
`;