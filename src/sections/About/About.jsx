import React from 'react'
import Subtitle from 'components/ui/Subtitle/Subtitle';
import Paragraph from 'components/ui/Paragraph/Paragraph';

import Values from 'components/common/Values/Values';
import styled from 'styled-components';

import { Container } from 'components/ui/Container/Container';
import content from "data/about.json";
const Box = styled.div`
@media (min-width: 768px){
    display: grid;
    gap: 11px;
    grid-template-columns: 1fr 1fr;
}
@media (min-width: 1280px){
gap: 0;
}
`;
const BoxTitle = styled.div`
position: relative;
text-align: left;
@media (min-width: 768px){
   display : flex;
   width: 272px;
   justify-content: space-between;
gap:82px;

}
@media (min-width: 1280px){
    gap: 254px;
    width: 365px;
}

`;

const ContainerBox = styled.div`
position: relative;
@media (min-width: 768px) {
    ::before{
    content: "";
   
    position: absolute;
    width: 1px;
    height: 114px;
    background: var(--accent-color);
    top: 0;
    left: -11px;
}
    
}
@media (min-width: 1280px){
    margin-left: 161px;
   ::before{
        height: 87px;   
    left: -161px; }
}

`;
const About = () => {

    return (<section id='about'>
        <Container>
            <Box>
                <BoxTitle style={{ textAlign: "left" }}>
                    <Subtitle>{content.title}</Subtitle>
                </BoxTitle>
                <ContainerBox>
                    <Paragraph>{content.text}</Paragraph>
                </ContainerBox>
            </Box>
            <Values />
        </Container>
    </section>
    )
}
export default About;