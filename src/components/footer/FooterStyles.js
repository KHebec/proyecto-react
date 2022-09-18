import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  width: 100%;
  @media (min-width: 480px) {
    // padding: 10px 0 0;
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
  text-align: center;
  align-items: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
  }
`;

export const FooterLink = styled.a`
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
  font-weigth: bold;
  padding-bottom: 20px;
  &:hover {
    color: #004225;
    font-size: 14px;
    transition: 200ms ease-in;
  }
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Heading = styled.p`
  font-size: 16px;
  color: #004225;
  margin-bottom: 20px;
  font-weight: bold;
  @media (min-width: 320px) {
    font-size: 20px;
  }
`;

export const Images = styled.img``;
