import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 1500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 90%;
  left: 52%;
  bottom: 300px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #004225;
  @media (max-width: 1024px) {
    position: fixed;
    width: 90%;
    left: 50%;
    bottom: 270px;
    height: 20px;
    font-size: 2.5rem;
    z-index: 1;
    cursor: pointer;
    color: #004225;
  }
  @media (max-width: 770px) {
    position: fixed;
    width: 90%;
    left: 45%;
    bottom: 280px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #004225;
  }
  @media (max-width: 480px) {
    position: fixed;
    width: 90%;
    left: 47%;
    bottom: 250px;
    height: 20px;
    font-size: 2.5rem;
    z-index: 1;
    cursor: pointer;
    color: #004225;
  }
  @media (max-width: 320px) {
    position: fixed;
    width: 90%;
    left: 43%;
    bottom: 440px;
    height: 20px;
    font-size: 2.5rem;
    z-index: 1;
    cursor: pointer;
    color: #004225;
  }
`;
