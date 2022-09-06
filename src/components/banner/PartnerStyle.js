import styled from "styled-components";
import Iconos from "../iconos/Iconos";

export const Box = styled.div`
  background-image: url(${Iconos.img7});
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

  @media (max-width: 500px) {
    padding: 70px 30px;
  }
`;

export const H1 = styled.h1`
  color: #112211;
  text-align: center;
`;

export const Column = styled.div`
  align-self: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
  }

  @media (max-width: 500px) {
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  &:hover {
    box-shadow: 6px 6px 6px #004225;
  }
`;
