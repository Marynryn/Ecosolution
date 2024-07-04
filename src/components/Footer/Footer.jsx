import Line from 'components/Line/Line';
import Logo from 'components/Logo/Logo';

import SocialIcons from 'components/SocialIcons/SocialIcons';
import SvgContainer from 'components/SvgContainer/SvgContainer';
import React from 'react'
import styled from 'styled-components';


const Box = styled.div`
display: flex;
justify-content: space-between;
margin-top: 24px;
align-items: center;
`;
const Button = styled.button`
height: 32px;
border: none;
background-color: transparent;
`;
const IconBox = styled.div`
display: flex;
justify-content: center;
margin: 24px 0;
`;
const InfoBox = styled.div`
display: flex;
flex-direction: column;
gap:16px;
text-align: center;
`;
const Text = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
text-align: center;
letter-spacing: -0.64px;
margin:0;
`;
const Footer = ({ scrollToMain }) => {

    return (
        <div>
            <Line />
            <Box>
                <Logo />
                <Button type='button' onClick={scrollToMain}>
                    <SvgContainer svgId={"icon-arrow-top"} />
                </Button>

            </Box>
            <IconBox>
                <SocialIcons props={{ fill: "var(--main-color)", stroke: "var(--main-color)", hoverFill: "var(--accent-color)", hoverStroke: "var(--accent-color)" }} />
            </IconBox>
            <InfoBox>
                <Text>79005, Ukraine, Lviv, street. Shota Rustaveli, 7</Text>
                <Text>office@ecosolution.com</Text>
                <Text>ecosolution &copy; 2023</Text>
            </InfoBox>
        </div>
    )
}
export default Footer;