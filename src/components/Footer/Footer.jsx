import Line from 'components/Line/Line';
import Logo from 'components/Logo/Logo';
import Paragraph from 'components/Paragraph/Paragraph';

import SocialIcons from 'components/SocialIcons/SocialIcons';
import SvgContainer from 'components/SvgContainer/SvgContainer';
import React from 'react'
import styled from 'styled-components';


const Box = styled.div`
display: flex;
justify-content: space-between;
margin-top: 24px;
align-items: center;
@media (min-width: 768px) {
    display: grid;
    grid-template-columns:  1fr 1fr;
    gap: 24px;
    margin-bottom: 16px;
}
@media (min-width: 1280px) {
gap: 300px;
}
`;

const Button = styled.button`
padding: 0;
display: flex;
height: 32px;
width: 32px;
border: none;
background-color: var(--accent-color);
border-radius: 100px;
   &:hover{
    background-color: var(--main-color);
    svg{
        stroke: var(--accent-color);

    }
}
`;
const IconBox = styled.div`
display: flex;
justify-content: center;
margin: 24px 0;
@media (min-width: 768px) {
    display: none;
}
`;
const BoxIcon = styled.div`
display: none;

@media (min-width: 768px) {
    display: block;
}
`;
const TextBox = styled.div`
display: flex;
flex-direction: column;
gap:16px;
align-items: center;
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
}
`;
const Container = styled.div`


@media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;
const InfoBox = styled.div`
display: flex;
flex-direction: column;
gap:16px;
align-items: center;
@media (min-width: 768px)
{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
   
}
@media (min-width: 768px){
    gap: 300px;
}
`;

const Footer = ({ scrollToMain }) => {

    return (
        <div>
            <Line />
            <Box>
                <Logo />
                <Container>
                    <BoxIcon> <SocialIcons props={{ fill: "var(--main-color)", stroke: "var(--main-color)", hoverFill: "var(--accent-color)", hoverStroke: "var(--accent-color)" }} /></BoxIcon>
                    <Button type='button' onClick={scrollToMain}>
                        <SvgContainer svgId={"icon-arrow-top"} backgroundColor='transparent' size="16px" padding="8px" />
                    </Button>
                </Container>
            </Box>
            <IconBox>
                <SocialIcons props={{ fill: "var(--main-color)", stroke: "var(--main-color)", hoverFill: "var(--accent-color)", hoverStroke: "var(--accent-color)" }} />
            </IconBox>
            <InfoBox>
                <Paragraph>79005, Ukraine, Lviv, street. Shota Rustaveli, 7</Paragraph>
                <TextBox>
                    <Paragraph>office@ecosolution.com</Paragraph>
                    <Paragraph>ecosolution &copy; 2023</Paragraph>
                </TextBox>
            </InfoBox>
        </div>
    )
}
export default Footer;