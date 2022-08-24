import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
		<div className= "headFoot">
			<h1 style={{ color: "green",
						textAlign: "center",
						marginTop: "-50px" }}>
				Siguenos en nuestras Redes Sociales!
			</h1>
			<FooterLink href="#">
					<i className="FaFacebookSquare">
						<img src="#" alt="FAcebook" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
			<FooterLink href="#">
					<i className="fab fa-instagram">
					<img src="#" alt="Instagram" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
			<FooterLink href="#">
					<i className="fab fa-twitter">
					<img src="#" alt="twitter" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
			<FooterLink href="#">
					<i className="fab fa-youtube">
					<img src="#" alt="Youtube" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
		</div>
	<Container>
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
			<FooterLink href="#">Otros..</FooterLink>
			<FooterLink href="#">Otros...</FooterLink>
			<FooterLink href="#">Y otros....</FooterLink>
		</Column>
		</Row>
	</Container>
    <div className='Copyright' style={{ backgroundColor: 'green'}}>
        © 2022 Copyright:
        <a className='text-white' href='https://github.com/KHebec/proyecto-react'>
          DOIT BY Aranwill, Estebancolunga, Humano4000, nilia2020, KHebec
        </a>
      </div>
	</Box>
);
};
export default Footer;
