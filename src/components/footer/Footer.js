import { Link } from "react-router-dom";
import face from "../../assets/images/fb2.png";
import inst from "../../assets/images/ig2.png";
import twit from "../../assets/images/tw2.png";
import wp from "../../assets/images/wp2.png";
import logo from "../../assets/images/logo.svg";
import fondo from "../../assets/images/fondo4.jpg";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Images,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <div
          className="HeadFoot"
          style={{
            backgroundImage: `url(${fondo})`,
            paddingBlock: "30px",
          }}
        >
          <h1
            style={{
              color: "#004225",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.3rem",
              marginBottom: "20px",
            }}
          >
            Seguinos en nuestras Redes Sociales
          </h1>
          <Row>
            <Column>
              <FooterLink
                href="https://es-la.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="face">
                  <Images src={face} key="Face" alt="Facebook" />
                </i>
              </FooterLink>
            </Column>
            <Column>
              <FooterLink
                href="https://www.instagram.com/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                <i className="insta">
                  <Images src={inst} key="Inst" alt="Instagram" />
                </i>
              </FooterLink>
            </Column>
            <Column>
              <FooterLink href="https://twitter.com/?lang=es" target="_blank">
                <i className="twit">
                  <Images
                    src={twit}
                    key="Twit"
                    alt="twitter"
                    target="_blank"
                    rel="noreferrer"
                  />
                </i>
              </FooterLink>
            </Column>
            <Column>
              <FooterLink
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="wsup">
                  <Images src={wp} key="WP" alt="WhatsUpp" />
                </i>
              </FooterLink>
            </Column>
          </Row>
        </div>
      </Container>
      <Container style={{ padding: "4% 0% 0% 0%", margin: "0% 0% 5% 0%" }}>
        <Row>
          <Column>
            <img
              src={logo}
              key="Logo"
              alt="Logo"
              style={{
                width: "80px",
                marginInline: "auto",
                paddingTop: "13%",
              }}
            />
          </Column>
          <Column>
            <Link to="/about">
              <Heading>Sobre Nosotros</Heading>
            </Link>

            <FooterLink className="font-bold" href="#">
              Nosotros
            </FooterLink>
            <FooterLink className="font-bold" href="#">
              Nuestra Visión
            </FooterLink>
            <FooterLink className="font-bold" href="#">
              FAQS
            </FooterLink>
          </Column>
          <Column>
            <Link to="/products">
              <Heading>Productos</Heading>
            </Link>

            <FooterLink className="font-bold" href="#">
              Whisky
            </FooterLink>
            <FooterLink className="font-bold" href="#">
              Gin
            </FooterLink>
            <FooterLink className="font-bold" href="#">
              Vodka
            </FooterLink>
          </Column>
          <Column>
            <Heading>Sucursales</Heading>
            <FooterLink className="font-bold" href="#">
              CABA
            </FooterLink>
            <FooterLink className="font-bold" href="#">
              Mar del Plata
            </FooterLink>
            <FooterLink className="font-bold" href="#">
              Mendoza
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p
        className="py-1 text-xs text-center"
        style={{ backgroundColor: "#004225", color: "white" }}
      >
        Copyright© 2022 Spirits
      </p>
    </Box>
  );
};
export default Footer;
