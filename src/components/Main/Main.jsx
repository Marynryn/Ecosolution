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
@media(min-width: 768px){
    width: 300px;
     font-size: 48px;
     line-height: 48px;
     margin-bottom: 0;
}
`;
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 24px;
align-items: center;
margin-bottom: 36px;
@media (min-width: 768px){
    flex-direction: row;
 justify-content: space-between;
    
}
`;
const Box = styled.div`

@media (min-width: 768px) {
display: flex;
margin-bottom: 26px;
gap: 65px;
}
`;
const ParagraphBox = styled.div`
display: none;
@media (min-width: 768px) {
display: flex;

}
`;
const Image = styled.img`
width: 100%;
height: 200px;
@media (min-width: 480px){
    height: 348px;
}
`;
const Main = ({ scrollToCases }) => {
    return (
        <div>
            <Box>
                <div>
                    <Title>
                        RENEWABLE ENERGY FOR ANY TASK
                    </Title></div>
                <div>
                    <Paragraph>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</Paragraph>
                    <ButtonLeanMore onClick={scrollToCases} /></div></Box>
            <Line />
            <Container >
                <div><Paragraph>79005, Ukraine, Lviv, street Shota Rustaveli, 7</Paragraph></div>
                <div><Paragraph>office@ecosolution.com</Paragraph></div>
                <ParagraphBox><Paragraph>ecosolution &copy; 2023</Paragraph></ParagraphBox>
            </Container>
            <Image src={heroImage} alt="wind turbine" />
        </div>
    )
}
export default Main;