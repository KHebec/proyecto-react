import styled from 'styled-components';


export const Box = styled.div`
padding: 70% 0% 0% 0%;
/*background: #004225;*/
position: absolute;
bottom: 0;
width: 100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}

@media (max-width: 500px) {
	padding: 70px 30px;
}
`;


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 80px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
/*repeat(auto-fill, minmax(185px, 1fr));*/
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(3, 1fr);
/*repeat(auto-fill,	minmax(200px, 1fr));*/
}

@media (max-width: 500px) {
	grid-template-columns: repeat(1, 1fr);
}
`;


export const FooterLink = styled.a`
color: #000; /*letras abajo antes era fff*/
margin-bottom: 0px;
font-size: 18px;
line-height: 22px;
text-decoration: none;
`;

