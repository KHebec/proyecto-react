import React from "react";
import Iconos from "./Iconos";
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
		<div className= 'HeadFoot' style={{ backgroundImage: `url(${Iconos.img6})`, padding:"5% 0% 5% 0%"}}>
			<h1 style={{ color: "#000", textAlign: "center", margin: "0% 0% 5% 0%"}}>
				Siguenos en nuestras Redes Sociales!
			</h1>
			<Row>
				<Column>
			<FooterLink href="https://es-la.facebook.com/" target="_blank">
					<i className="face">
						<Images src={Iconos.img1} key="Face" alt="Facebook" style={{ marginLeft: "10px" }}/>
					</i>
			</FooterLink>
			</Column>
			<Column>
			<FooterLink href="https://www.instagram.com/?hl=es-la" target="_blank">
					<i className="insta">
						<Images src={Iconos.img2} key="Inst" alt="Instagram" style={{ marginLeft: "10px" }}/>
					</i>
			</FooterLink>
			</Column>
			<Column>
			<FooterLink href="https://twitter.com/?lang=es" target="_blank">
					<i className="twit">
						<Images src={Iconos.img3} key="Twit" alt="twitter" target="_blank" style={{ marginLeft: "0px" }}/>
					</i>
			</FooterLink>
			</Column>
			<Column>
			<FooterLink href="https://web.whatsapp.com/"  target="_blank">
					<i className="wsup">
						<Images src={Iconos.img4} key="WP" alt="WhatsUpp" style={{ marginLeft: "0px" }}/>
					</i>
			</FooterLink>
			</Column>
			</Row>
		</div>
		</Container>
		<Container className='Container' style={{padding:"4% 0% 0% 0%", margin: "0% 0% 5% 0%"}}>
			<Row>
				<Column>
				<img src={Iconos.img5} key="Logo" alt="Logo" style={{ width: "50%", heigth: "50%", marginLeft: "5%", paddingTop: "13%" }}/>
				</Column>
				<Column>
					<Heading>Sobre Nosotros</Heading>
					<FooterLink href="#">Nosotros</FooterLink>
					<FooterLink href="#">Nuestra Vision</FooterLink>
					<FooterLink href="#">Testimonios</FooterLink>
					<FooterLink href="#">FAQS</FooterLink>
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
				
			</Row>
		</Container>
		<div className='Copyright' style={{ backgroundColor: '#004225', color:'white'}}>
			© 2022 Copyright
			<a className='text-white' href='https://github.com/Aranwill' target="_blank" style={{color:'white'}}>
			: DOIT BY Aranwill
			</a>
			<a className='text-white' href='https://github.com/Estebancolunga' target="_blank" style={{color:'white'}}>
			, Estebancolunga
			</a>
			<a className='text-white' href='https://github.com/Humano4000' target="_blank" style={{color:'white'}}>
			, Humano4000
			</a>
			<a className='text-white' href='https://github.com/nilia2020' target="_blank" style={{color:'white'}}>
			, nilia2020
			</a>
			<a className='text-white' href='https://github.com/KHebec' target="_blank" style={{color:'white'}}>
			, KHebec
			</a>
			<a className='text-white' href='https://github.com/KHebec/proyecto-react' target="_blank" style={{color:'white'}}>
			. See our proyect.
			</a>
		</div>
	</Box>
);
};
export default Footer;
