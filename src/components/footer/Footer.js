import React from "react";
import {
  Box,
  Row,
  RowSocial,
  Column,
  FooterLink,
  Heading,
  CopyRightLink,
  Icons,
  H2,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <H2>Síguenos en nuestras Redes Sociales!</H2>
      <RowSocial>
        <FooterLink href="#">
          <Icons className="fab fa-facebook"></Icons>
        </FooterLink>
        <FooterLink href="#">
          <Icons className="fab fa-instagram"></Icons>
        </FooterLink>
        <FooterLink href="#">
          <Icons className="fab fa-youtube"></Icons>
        </FooterLink>
        <FooterLink href="#">
          <Icons className="fab fa-whatsapp"></Icons>
        </FooterLink>
      </RowSocial>
      <Row>
        <Column>
          <Heading>Sobre Nosotros</Heading>
          <FooterLink href="#">Nosotros</FooterLink>
          <FooterLink href="#">Nuestra Vision</FooterLink>
          <FooterLink href="#">Testimonios</FooterLink>
        </Column>
        <Column>
          <Heading>Productos</Heading>
          <FooterLink href="#">Whisky</FooterLink>
          <FooterLink href="#">Gin</FooterLink>
          <FooterLink href="#">Vodka</FooterLink>
        </Column>
        <Column>
          <Heading>Sucursales</Heading>
          <FooterLink href="#">CABA</FooterLink>
          <FooterLink href="#">Mar del Plata</FooterLink>
          <FooterLink href="#">Cordoba Capital</FooterLink>
          <FooterLink href="#">Mendoza Capital</FooterLink>
        </Column>
        <Column>
          <Heading>Otros</Heading>
          <FooterLink href="#">FAQS</FooterLink>
          <FooterLink href="#">Y otros....</FooterLink>
        </Column>
      </Row>
      <div
        className="Copyright"
        style={{ color: "#efffef", textAlign: "center", marginBlock: "24px" }}
      >
        <CopyRightLink href="https://github.com/KHebec/proyecto-react">
          @Copyright 2022 by Aranwill - Estebancolunga - Humano4000 - nilia2020
          - KHebec
        </CopyRightLink>
      </div>
    </Box>
  );
};
export default Footer;
