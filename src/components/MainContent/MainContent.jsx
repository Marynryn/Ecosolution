import About from 'components/About/About';
import Main from 'components/Main/Main';
import React, { useRef } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
 
  text-align: center; 
  margin-top: 242px;
`;

const Section = styled.section`
 margin-bottom: 36px;
`;

const MainContent = () => {
    const casesRef = useRef(null);

    const scrollToCases = () => {
        casesRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainWrapper>
            <Section id="main">
                <Main scrollToCases={scrollToCases} />
            </Section>
            <Section id="about">
                <About />
            </Section>
            <Section id="cases" ref={casesRef}>
                <h2>Our Services</h2>
                <p>This is the services section.</p>
            </Section>
            <Section id="faq">
                <h2>Contact Us</h2>
                <p>This is the contact section.</p>
            </Section>
        </MainWrapper>
    );
}

export default MainContent;