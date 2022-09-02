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
                                <img src={Iconos.img8} key="abcd" style={{ marginLeft: "20px", width:"30%", heigth: "30%", padding:"0% 0% 0% 10%"}}/>
                        </i>
                    </FooterLink>
                </Column>
                <Column>
                    <FooterLink href="http://www.aasommeliers.com.ar/nosotros/" target="_blank">
                        <i>
                            <img src={Iconos.img9} key="abc" style={{ marginLeft: "100px",  width:"40%", heigth: "40%"}}/>
                        </i>
                    </FooterLink>
                </Column>
                <Column>
                    <FooterLink href="https://fada-argentina.org.ar/" target="_blank">
                        <i>
                            <img src={Iconos.img10} key="abcde" target="_blank" style={{ marginLeft: "100px",  width:"30%", heigth: "30%"}}/>
                        </i>
                    </FooterLink>
                </Column>
            </Row>
        </div>
    </Box>
  )
}

export default Partner