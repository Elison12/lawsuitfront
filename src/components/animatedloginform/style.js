import styled, { keyframes } from "styled-components";

export const move = keyframes`
0%{
    opacity:0;

}
95%{
    opacity:1;

}

`;
export const BackgroundBox = styled.div`
  background-color: #beeefb;
  height: 50vh;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;  

  margin: 15rem auto;

  position: relative;
  border-radius: 26px;
  border: 1px solid #053271;

  .text1 {
    z-index: ${(props) => (props.clicked ? "-700" : "700")};
    transform: ${(props) =>
    props.clicked ? "translateX(0)" : "translateX(100%)"};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? move : "none")} 1.5s;
  }

  .text2 {
    z-index: ${(props) => (props.clicked ? "700" : "-700")};
    animation: ${(props) => (props.clicked ? "none" : move)} 1.5s;

    transform: ${(props) =>
    props.clicked ? "translateX(-100%)" : "translateX(0%)"};
    transition: transform 1s ease-in-out;
  }

  .signin {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "-600" : "500")};
    transform: ${(props) => (props.clicked ? "none" : "translateX(-50%)")};
    transition: all 1s;
  }
  .signup {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "500" : "-500")};
    transform: ${(props) => (props.clicked ? "translateX(50%)" : "none")};
    transition: all 1s;
  }
`;

export const Box1 = styled.div`
  background-color: #f1fdcd;
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  transform: ${(props) =>
    props.clicked ? "translateX(89%)" : "translateX(8%)"};

  transition: transform 1s;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f1fdcd;

    z-index: -200;
  }

  &::before {
    top: 3rem;
    border-radius: 22px;
    border: 4px solid #053271;
  }

  &::after {
    bottom: 3rem;
    border-radius: 22px 22px 0 0;
    border-top: 4px solid #053271;
    border-right: 4px solid #053271;
    border-left: 4px solid #053271;
  }
`;

export const Box2 = styled.div`
  background-color: #053271;
  width: 45%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  z-index: 600;
  transform: ${(props) =>
    props.clicked ? "translateX(-122.8%)" : "translateX(0%)"};
  transition: transform 1s;

  border-radius: ${(props) =>
    props.clicked ? "22px 0 0 22px" : "0 22px 22px 0"};
`;

export const Form = styled.form`
  color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;

  /* z-index: 100; */
`;

export const Input = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 15px;
  border-bottom: 2px solid #053271;

  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;

  select {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #0E1E5B;
        border-radius: 5px;
        height: 45px;
        width: 20vw;
        padding: 20px;
        border: 1px solid #0E1E5B;
        color: white;
  }

  h2 {
        font-size: 12px;
        margin-left: 10px;
        margin-bottom: 3px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
  }
  &:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  padding: 1rem 3.5rem;
  margin-top: 0rem;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;

  box-shadow: 0 7px #999;

  &:hover {
    background-color: #1b1b1b;
  }
  &:active {
    background-color: black;

    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  &:focus {
    outline: none;
  }
`;
export const Title = styled.h1`
  font-size: 2.5;
  margin-bottom: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.0rem;
  margin: 1rem 0;
`;

export const ButtonAnimate = styled.button`
  position: absolute;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  top: 70%;
  border: none;
  cursor: pointer;

  right: ${(props) => (props.clicked ? "52%" : "42%")};

  transform: ${(props) => (props.clicked ? "rotate(360deg)" : "rotate(0)")};

  transition: all 1.5s;
  background-color: transparent;

  &::before {
    content: "😜";
    font-size: 4rem;
  }

  &:focus {
    outline: none;
  }
`;

export const Text = styled.div`
  position: fixed;
  z-index: 1000;
  top: 70%;
  /* left: 48%; */
  font-size: 1.0rem;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.1rem;
  color: #fff;


  transform: ${(props) =>
    props.clicked ? "translateX(-10%)" : "translateX(50%)"};
  transition: transform 1s;
`;

export const Image = styled.img`

  height: 6rem;
  width: 6rem;
  position: absolute;
  z-index: 1000;
  font-size: 1.0rem;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2rem;
  color: #fff;

  transform: ${(props) =>
    props.clicked ? "translateX(-110%)" : "translateX(120%)"};
  transition: transform 1s;

  .attention {
    font-size: 2.5rem;
    position: relative;
    margin-top: 2rem;
  }

  .attention-icon {
    position: absolute;
    right: ${(props) => (props.clicked ? "0" : "none")};
    top: 100%;
    font-size: 5rem;
  }
`;

export const Seletor = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    
    h2 {
        font-size: 12px;
        margin-left: 10px;
        margin-bottom: 3px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }
    input { 
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #0E1E5B;
        border-radius: 5px;
        height: 45px;
        width: 20vw;
        padding: 10px;
        border: 1px solid #0E1E5B;
        color: white;
    }
    select {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #0E1E5B;
        border-radius: 5px;
        height: 45px;
        width: 20vw;
        padding: 20px;
        border: 1px solid #0E1E5B;
        color: white;
    }
`;