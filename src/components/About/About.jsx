import React from 'react'
import Subtitle from './../Subtitle/Subtitle';
import Paragraph from 'components/Paragraph/Paragraph';
import { useMediaQuery } from 'react-responsive';
import Values from 'components/Values/Values';
import styled from 'styled-components';
import Line from 'components/Line/Line';

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
text-align: left;
@media (min-width: 768px){
   display : flex;
   justify-content: space-between;
gap:82px;
}
@media (min-width: 1280px){
    gap: 254px;
}

`;
const BoxLine = styled.div`
display: none;
@media (min-width: 768px){
    display: block;
   
}
@media (min-width: 1280px){
    margin-top: 7px;
}
`;
const Container = styled.div`

@media (min-width: 1280px){
    margin-left: 161px;
   
}

`;
const About = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
    return (<>
        <Box>
            <BoxTitle style={{ textAlign: "left" }}>
                <Subtitle>Main values of our company</Subtitle>

                <BoxLine>
                    <Line height={isDesktop ? '87px' : '114px'} width={"1px"} />
                </BoxLine>
            </BoxTitle>
            <Container>
                <Paragraph>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</Paragraph>
            </Container>
        </Box>


        <Values />
    </>
    )
}
export default About;