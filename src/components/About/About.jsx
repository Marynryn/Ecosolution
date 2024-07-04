import React from 'react'
import Subtitle from './../Subtitle/Subtitle';
import Paragraph from 'components/Paragraph/Paragraph';

import Values from 'components/Values/Values';


const About = () => {
    return (
        <div>
            <div style={{ textAlign: "left" }}>
                <Subtitle>Main values of our company</Subtitle></div>
            <Paragraph>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</Paragraph>
            <Values />
        </div>
    )
}
export default About;