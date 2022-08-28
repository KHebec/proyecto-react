import React from "react";
import Iconos from "./Iconos";
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
		<div className= 'HeadFoot'>
			<h1 style={{ color: "green",
						textAlign: "center",
						marginTop: "-50px" }}>
				Siguenos en nuestras Redes Sociales!
			</h1>
			<FooterLink href="#"  target="_blank">
					<i className="Logo">
						<img src={Iconos.img5} key="Logo" alt="Logo" style={{ width: "10%", heigth: "10%", padding:"0% 80% 0% 0%"}}/>
					</i>
			</FooterLink>
			<FooterLink href="https://es-la.facebook.com/" target="_blank">
					<i className="FaFacebookSquare">
						<img src={Iconos.img1} key="Face" alt="Facebook" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/?hl=es-la" target="_blank">
					<i className="fab fa-instagram">
					<img src={Iconos.img2} key="Inst" alt="Instagram" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/?lang=es" target="_blank">
					<i className="fab fa-twitter">
					<img src={Iconos.img3} key="Twit" alt="twitter" target="_blank" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/"  target="_blank">
					<i className="fab fa-youtube">
					<img src={Iconos.img4} key="YT" alt="Youtube" style={{ marginLeft: "100px" }}/>
					</i>
			</FooterLink>
		</div>
		<Container className='Container' style={{padding:"4% 0% 0% 0%"}}>
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
				<FooterLink href="#">Cambios y devoluciones</FooterLink>
				<FooterLink href="#">Contactanos</FooterLink>
			</Column>
			</Row>
		</Container>
		<div className='Copyright' style={{ backgroundColor: 'green'}}>
			© 2022 Copyright:
			<a className='text-white' href='https://github.com/Aranwill' target="_blank">
			DOIT BY Aranwill
			</a>
			<a className='text-white' href='https://github.com/Estebancolunga' target="_blank">
			, Estebancolunga
			</a>
			<a className='text-white' href='https://github.com/Humano4000' target="_blank">
			, Humano4000
			</a>
			<a className='text-white' href='https://github.com/nilia2020' target="_blank">
			, nilia2020
			</a>
			<a className='text-white' href='https://github.com/KHebec' target="_blank">
			, KHebec
			</a>
			<a className='text-white' href='https://github.com/KHebec/proyecto-react' target="_blank">
			. See our proyect.
			</a>
		</div>
	</Box>
);
};
export default Footer;
