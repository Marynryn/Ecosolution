import About from 'components/About/About';
import Cases from 'components/Cases/Cases';
import Electricity from 'components/Electricity/Electricity';
import Faq from 'components/Faq/Faq';
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
            <Section id="electricity">
                <Electricity />
            </Section>
            <Section id="cases" ref={casesRef}>
                <Cases />
            </Section>
            <Section id="faq">
                <Faq />
            </Section>
        </MainWrapper>
    );
}

export default MainContent;