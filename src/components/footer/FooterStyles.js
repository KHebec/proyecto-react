import styled from "styled-components";

export const Box = styled.div`
  padding: 0% 0% 0% 0%;
  position: absolute;
  width: 100%;
  @media (min-width: 480px) {
    padding: 10px 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 0% 0% 0% 0%;
    margin: 0% 0% 0% 0%;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 0% 0% 0% 0%;
    margin: 0% 0% 0% 0%;
    align-items: center;
  }
  @media (max-width: 480px) {
    padding: 0% 0% 3% 0%;
    margin: 5% 0% 0% 0%;
    align-items: center;
  }
  @media (max-width: 320px) {
    padding: 10% 0% 0% 0%;
    margin: 0% 0% 0% 0%;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding-top: 20px;
  @media (max-width: 1024px) {
    padding: 0% 0% 0% 0%;
    margin: 0% 0% 0% 0%;
    grid-gap: 0px;
  }
  @media (max-width: 768px) {
    padding: 0% 0% 0% 0%;
    margin: 0% 0% 0% 0%;
    grid-gap: 0px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
  }
`;

export const FooterLink = styled.a`
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  font-weigth: bold;
  &:hover {
    color: #004225; /*letras abajo antes era green */
    font-size: 20px;
    transition: 200ms ease-in;
  }
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #004225;
  margin-bottom: 20px;
  font-weight: bold;
  @media (min-width: 320px) {
    font-size: 24px;
  }
`;

export const Images = styled.img``;
