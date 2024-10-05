
import Logo from 'components/ui/Logo/Logo';
import Paragraph from 'components/ui/Paragraph/Paragraph';
import SocialIcons from 'components/ui/SocialIcons/SocialIcons';
import SvgContainer from 'components/ui/SvgContainer/SvgContainer';
import React from 'react'
import styled from 'styled-components';
import { Container } from 'components/ui/Container/Container';
import { Link as ScrollLink } from 'react-scroll';
import content from 'data/common.json';
const Box = styled.div`
display: flex;
justify-content: space-between;
margin-top: 24px;
align-items: center;
position: relative;
::before{
    content: '';
    position: absolute;
    top: -24px;
    left: 0;

    width: 100%;
    height: 1px;
    background-color: var(--accent-color);
}
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

const Button = styled(ScrollLink)`
padding: 0;
display: inline-flex;
height: 32px;
width: 32px;
border: none;
background-color: var(--accent-color);
border-radius: 100px;
transition: all 300ms ease-in-out;
   &:hover, &:focus{
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
const ContainerBox = styled.div`
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
        <footer>
            <Container>

                <Box>
                    <Logo />
                    <ContainerBox>
                        <BoxIcon>
                            <SocialIcons props={{ fill: "var(--main-color)", stroke: "var(--main-color)", hoverFill: "var(--accent-color)", hoverStroke: "var(--accent-color)" }} /></BoxIcon>
                        <Button to={content.footer.href} role="link"
                            smooth={true}
                            offset={-150}
                            duration={500}

                            tabIndex={0}>
                            <SvgContainer svgId={"icon-arrow-top"} backgroundColor='transparent' size="16px" padding="8px" />
                        </Button>
                    </ContainerBox>
                </Box>
                <IconBox>
                    <SocialIcons props={{ fill: "var(--main-color)", stroke: "var(--main-color)", hoverFill: "var(--accent-color)", hoverStroke: "var(--accent-color)" }} />
                </IconBox>
                <InfoBox>
                    <Paragraph>{content.footer.address}</Paragraph>
                    <TextBox>
                        <Paragraph>{content.footer.email}</Paragraph>
                        <Paragraph>{content.footer.copyright}</Paragraph>
                    </TextBox>
                </InfoBox>
            </Container>
        </footer>
    )
}
export default Footer;