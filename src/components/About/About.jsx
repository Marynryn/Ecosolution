import React from 'react'
import Subtitle from './../Subtitle/Subtitle';
import Paragraph from 'components/Paragraph/Paragraph';

import Values from 'components/Values/Values';
import styled from 'styled-components';
import Line from 'components/Line/Line';

const Box = styled.div`
@media (min-width: 768px){
    display: flex;
    gap: 82px;
}

`;
const BoxTitle = styled.div`
text-align: left;
@media (min-width: 768px){
   width:272px;
}

`;
const BoxLine = styled.div`
display: none;
@media (min-width: 768px){
    display: block;
   margin-right:11px;
}

`;
const BoxText = styled.div`

@media (min-width: 768px){
    display:flex;
    width: 354px;
}

`;
const About = () => {
    return (<>
        <Box>
            <BoxTitle style={{ textAlign: "left" }}>
                <Subtitle>Main values of our company</Subtitle></BoxTitle>
            <BoxText >
                <BoxLine>
                    <Line height={"114px"} width={"1px"} />
                </BoxLine>
                <Paragraph>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</Paragraph>
            </BoxText>
        </Box>


        <Values />
    </>
    )
}
export default About;