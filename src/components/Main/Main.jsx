import ButtonLeanMore from 'components/ButtonLearnMore/ButtonLeanMore';
import Line from 'components/Line/Line';
import Paragraph from 'components/Paragraph/Paragraph';
import React from 'react'
import styled from 'styled-components';
import heroImage from "img/mobile/wind-turbine-clean-energy.png"

const Title = styled.h1`
   font-size: 36px;
font-style: normal;
font-weight: 400;
text-align: left;
margin-bottom: 24px;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 24px;
align-items: center;
margin-bottom: 36px;
`;
const Image = styled.img`
width: 100%;
height: 200px;
`;
const Main = ({ scrollToCases }) => {
    return (
        <div>
            <Title>
                RENEWABLE ENERGY FOR ANY TASK
            </Title>
            <Paragraph>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</Paragraph>
            <ButtonLeanMore onClick={scrollToCases} />
            <Line />
            <Container >
                <Paragraph>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Paragraph>
                <Paragraph>office@ecosolution.com</Paragraph>
            </Container>
            <Image src={heroImage} alt="wind turbine" />
        </div>
    )
}
export default Main;