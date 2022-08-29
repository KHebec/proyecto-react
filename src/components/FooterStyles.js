import styled from 'styled-components';

export const Box = styled.div`
padding: 70px 0px 5px 0px;
/*background: #004225;*/
position: absolute;
bottom: 0;
width: 100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}

@media (max-width: 700px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}

@media (max-width: 700px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000; /*letras abajo antes era fff*/
margin-bottom: 0px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #004225;/*letras abajo antes era green */
	font-size: 20px;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #004225; /*letras abajo antes era fff*/
margin-bottom: 40px;
font-weight: bold;
`;