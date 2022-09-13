import styled from 'styled-components';


export const Box = styled.div`
padding: 70% 0% 0% 0%;
/*background: #004225;*/
position: absolute;
bottom: 0;
width: 100%;

@media (max-width: 1024px) {
	padding: 10px 10px;
}

@media (max-width: 768px) {
	padding: 10px 10px;
}

@media (max-width: 480px) {
	padding: 10px 10px;

}

@media (max-width: 320px) {
	padding: 10px 10px;
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
align-items: center;
margin-left: 70px;


@media (max-width: 768px) {
	padding: 0% 0% 0% 0%;
	margin: 0% 0% 0% 10%;
}

@media (max-width: 480px) {
	padding: 0% 0% 6% 0%;
	margin: 0% 0% 0% 5%;

}

@media (max-width: 320px) {
	padding: 10% 0% 0% 0%;
	margin: 0% 0% 0% 0%;
}
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
/*repeat(auto-fill, minmax(185px, 1fr));*/
grid-gap: 20px;
padding: 0% 0% 0% 0%;
margin: 0% 5% 0% 0%;

@media (max-width: 1024px) {
	padding: 0% 0% 0% 0%;
	margin: 0% 5% 0% 0%;
	grid-gap: 0px;
}

@media (max-width: 768px) {
	grid-gap: 0px;
}

@media (max-width: 480px) {
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 0px;

}

@media (max-width: 320px) {
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 0px;
}
`;


export const FooterLink = styled.a`
color: #000; /*letras abajo antes era fff*/
margin-bottom: 0px;
font-size: 18px;
line-height: 22px;
text-decoration: none;

@media (max-width: 480px) {

	
}

@media (max-width: 320px) {

}
`;

