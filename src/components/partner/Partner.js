import fondoPartner from "../../assets/images/fondo3.jpg";
import LAAS from "../../assets/images/Loaas.png";
import LMW from "../../assets/images/LoMW.webp";
import LFADA from "../../assets/images/Lfada.png";

import { Box, Row, Column, FooterLink } from "./PartnerStyle";

const Partner = () => {
  return (
    <Box>
      <div
        className="HeadPartner"
        style={{
          backgroundImage: `url(${fondoPartner})`,
          padding: "5% 0% 5% 0%",
        }}
      >
        <h1
          style={{ color: "#000", textAlign: "center", margin: "0% 0% 6% 0%" }}
        >
          Estamos asociados:
        </h1>
        <Row>
          <Column>
            <FooterLink href="https://whiskymaltargentina.com/" target="_blank">
              <i>
                <img
                  src={LMW}
                  key="abcd"
                  style={{
                    width: "100%",
                    heigth: "100%",
                    margin: "0% 0% 0% 0%",
                  }}
                />
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink
              href="http://www.aasommeliers.com.ar/nosotros/"
              target="_blank"
            >
              <i>
                <img
                  src={LAAS}
                  key="abc"
                  style={{
                    width: "100%",
                    heigth: "100%",
                    margin: "0% 0% 0% 0%",
                  }}
                />
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://fada-argentina.org.ar/" target="_blank">
              <i>
                <img
                  src={LFADA}
                  key="abcde"
                  target="_blank"
                  style={{
                    width: "60%",
                    heigth: "60%",
                    margin: "0% 0% 0% 20%",
                  }}
                />
              </i>
            </FooterLink>
          </Column>
        </Row>
      </div>
    </Box>
  );
};

export default Partner;
