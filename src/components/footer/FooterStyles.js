import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  bottom: 1;
  width: calc(100% - 40px);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

  @media (max-width: 500px) {
    padding: 70px 30px;
  }
`;
export const SocialLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //   max-width: 100%;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    /*repeat(auto-fill,	minmax(200px, 1fr));*/
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #000; /*letras abajo antes era fff*/
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;

  &:hover {
    font-size: 20px;
    transition: 200ms ease-in;
    font-weight: bold;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #004225; /*letras abajo antes era fff*/
  margin-bottom: 40px;
  font-weight: bold;
`;
