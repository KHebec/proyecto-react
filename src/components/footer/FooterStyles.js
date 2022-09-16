import styled from "styled-components";

export const Box = styled.div`
  padding: 0% 0% 0% 0%;
  position: absolute;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 10px 0px;
  }
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
  @media (max-width: 480px) {
    padding: 10px 0px;
  }
  @media (max-width: 320px) {
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
  /*repeat(auto-fill, minmax(185px, 1fr));*/
  grid-gap: 20px;
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
  color: #000; /*letras abajo antes era fff*/
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  &:hover {
    color: green; /*letras abajo antes era green */
    font-size: 20px;
    transition: 200ms ease-in;
    font-weight: bold;
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

export const Heading = styled.p`
  font-size: 24px;
  color: #004225; /*letras abajo antes era fff*/
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const Images = styled.img``;
