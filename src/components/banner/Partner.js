import React from "react";
import Iconos from "../iconos/Iconos";
import { Box, Row, Column, FooterLink, H1 } from "./PartnerStyle";

const Partner = () => {
  return (
    <Box>
      <H1>Estamos asociados</H1>
      <Row>
        <Column>
          <FooterLink
            href="https://whiskymaltargentina.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Iconos.img8}
              key="abcd"
              alt="Museo del whysky"
              style={{ width: "100px" }}
            />
          </FooterLink>
        </Column>
        <Column>
          <FooterLink
            href="http://www.aasommeliers.com.ar/nosotros/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Iconos.img9}
              key="abc"
              alt="Asociación de sommeliers"
              style={{ width: "150px" }}
            />
          </FooterLink>
        </Column>
        <Column>
          <FooterLink href="https://fada-argentina.org.ar/" target="_blank">
            <img
              src={Iconos.img10}
              key="abcde"
              target="_blank"
              rel="noreferrer"
              style={{ width: "90px" }}
              alt="fada"
              className="image"
            />
          </FooterLink>
        </Column>
      </Row>
    </Box>
  );
};

export default Partner;
