import ButtonLeanMore from 'components/common/ButtonLearnMore/ButtonLeanMore';

import Paragraph from 'components/ui/Paragraph/Paragraph';
import React from 'react'
import styled from 'styled-components';
import mediumImage1x from "img/tablet/main/wind-turbine-clean-energy1x.webp";
import mediumImage2x from "img/tablet/main/wind-turbine-clean-energy2x.webp";
import smallImage1x from "img/mobile/wind-turbine-clean-energy1x.webp";
import smallImage2x from "img/mobile/wind-turbine-clean-energy2x.webp";
import largeImage1x from "img/desktop/main/wind-turbine-clean-energy1x.webp";
import largeImage2x from "img/desktop/main/wind-turbine-clean-energy2x.webp";
import { Container } from 'components/ui/Container/Container';
import content from 'data/main.json';

const Title = styled.h1`
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
const ContainerContacts = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 48px;
align-items: center;
margin-bottom: 36px;
@media (min-width: 768px){
   margin-top: 42px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
};
@media (min-width: 1280px){
   gap: 320px;
}

`;
const Box = styled.div`
position: relative; 
::after{
position: absolute;
content: "";
width: 100%;
height: 1px;
bottom: -26px;
left: 0;
background-color: var(--accent-color);
}

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
const Hero = () => {
    return (
        <section id='main' className='hero'>
            <Container>
                <Box>
                    <Title>
                        {content.title}
                    </Title>
                    <div>
                        <BoxButton>
                            <Paragraph>{content.text}</Paragraph></BoxButton>
                        <ButtonLeanMore /></div>
                </Box>

                <ContainerContacts >
                    <div><Paragraph>{content.contacts.address}</Paragraph></div>
                    <TextBox><Paragraph>{content.contacts.email}</Paragraph>
                        <ParagraphBox><Paragraph>{content.contacts.copyright}</Paragraph></ParagraphBox></TextBox>
                </ContainerContacts>
                <picture>
                    <source
                        srcSet={`
    ${largeImage1x} 1x, 
    ${largeImage2x} 2x
  `}
                        media="(min-width: 1280px)"
                    />
                    <source
                        srcSet={`
    ${mediumImage1x} 1x, 
    ${mediumImage2x} 2x
  `}
                        media="(min-width: 768px)"
                    />
                    <source
                        srcSet={`
    ${smallImage1x} 1x, 
    ${smallImage2x} 2x
  `}
                        media="(min-width: 375px)"
                    />
                    <Image src={smallImage1x} alt={content.alt} />
                </picture>
            </Container>
        </section>
    )
}
export default Hero; 