import ButtonLeanMore from 'components/ButtonLearnMore/ButtonLeanMore';
import Line from 'components/Line/Line';
import Paragraph from 'components/Paragraph/Paragraph';
import React from 'react'
import styled from 'styled-components';
import heroImage from "img/mobile/wind-turbine-clean-energy.png"

const Title = styled.h2`
   font-size: 36px;
font-style: normal;
font-weight: 400;
text-align: left;
margin-bottom: 24px;
line-height: 36px;
width: 320px;
@media(min-width: 768px){
    width: 300px;
     font-size: 48px;
     line-height: 48px;
     margin-bottom: 0;
};
@media(min-width: 1280px){
font-size: 64px;
line-height: 64px;
width: 485px;
};
`;
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 24px;
align-items: center;
margin-bottom: 36px;
@media (min-width: 768px){
   
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
};
@media (min-width: 1280px){
   gap: 320px;
}

`;
const Box = styled.div`

@media (min-width: 768px) {
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 24px;
gap: 24px;
@media (min-width: 1280px){
gap: 296px;
}
}
`;
const ParagraphBox = styled.div`
display: none;
@media (min-width: 768px) {
display: flex;

}
`;
const TextBox = styled.div`

@media (min-width: 768px) {
display: flex;
justify-content: space-between;
}
@media (min-width: 1280px){
 
}
`;
const BoxButton = styled.div`

@media (min-width: 1280px) {
width: 363px;
}
`;
const Image = styled.img`
width: 100%;
height: 200px;
@media (min-width: 480px){
    height: 348px;
};
@media (min-width: 1280px){
    height: 584px;
}
`;
const Main = ({ scrollToCases }) => {
    return (
        <div>
            <Box>

                <Title>
                    RENEWABLE ENERGY FOR ANY TASK
                </Title>
                <div>
                    <BoxButton>
                        <Paragraph>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</Paragraph></BoxButton>
                    <ButtonLeanMore onClick={scrollToCases} /></div>
            </Box>
            <Line />
            <Container >
                <div><Paragraph>79005, Ukraine, Lviv, street Shota Rustaveli, 7</Paragraph></div>
                <TextBox><Paragraph>office@ecosolution.com</Paragraph>
                    <ParagraphBox><Paragraph>ecosolution &copy; 2023</Paragraph></ParagraphBox></TextBox>
            </Container>
            <Image src={heroImage} alt="wind turbine" />
        </div>
    )
}
export default Main;