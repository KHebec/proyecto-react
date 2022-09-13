import React from 'react';
import Iconos from "./Iconos";
import {Box, 
    Container,
    Row,
    Column,
    FooterLink,
    Heading,} from "./PartnerStyle";

const Partner = () => {
  return (
    <Box>
        <div className= 'HeadPartner' style={{ backgroundImage: `url(${Iconos.img7})`, padding:"5% 0% 5% 0%"}}>
            <h1 style={{ color: "#000", textAlign: "center", margin: "0% 0% 6% 0%"}}>
                    Estamos asociados:
            </h1>
            <Row>
                <Column>
                    <FooterLink href="https://whiskymaltargentina.com/" target="_blank">
                        <i>
                            <img src={Iconos.img8} key="abcd" style={{width:"100%", heigth: "100%", margin: "0% 0% 0% 0%"}}/>
                        </i>
                    </FooterLink>
                </Column>
                <Column>
                    <FooterLink href="http://www.aasommeliers.com.ar/nosotros/" target="_blank">
                        <i>
                            <img src={Iconos.img9} key="abc" style={{width:"100%", heigth: "100%", margin: "0% 0% 0% 0%"}}/>
                        </i>
                    </FooterLink>
                </Column>
                <Column>
                    <FooterLink href="https://fada-argentina.org.ar/" target="_blank">
                        <i>
                            <img src={Iconos.img10} key="abcde" target="_blank" style={{width:"60%", heigth: "60%", margin: "0% 0% 0% 20%"}}/>
                        </i>
                    </FooterLink>
                </Column>
            </Row>
        </div>
    </Box>
  )
}

export default Partner