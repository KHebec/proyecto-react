import styled from "styled-components";

export const Box = styled.div`
  background: #004225;
  width: calc(100%);
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-inline: 4rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 15%;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RowSocial = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const FooterLink = styled.a`
  color: #dfffdf;
  font-size: 1.3rem;
  line-height: 2.8rem;
  height: 2.8rem;

  text-decoration: none;
  &:hover {
    font-weight: bold;
    transition: 50ms ease-in;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Heading = styled.p`
  font-size: 1.3rem;
  color: #dfffdf;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const CopyRightLink = styled.a`
  color: #dfffdf;
  margin-bottom: 20px;
  font-size: 1.2rem;
  line-heigth: 1.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #88ff88;
    transition: 50ms ease-in;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  } ;
`;

export const Icons = styled.i`
  font-size: 2.5rem;
  width: 3rem;
  &:hover {
    color: #88ff88;
    font-size: 2.7rem;
    transition: 50ms ease-in;
  }
`;

export const H2 = styled.p`
  font-size: 1.9rem;
  color: #dfffdf;
  font-family: "Eczar";
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px #113311;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  } ;
`;
