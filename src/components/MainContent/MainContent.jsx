import About from 'components/About/About';
import Cases from 'components/Cases/Cases';
import ContactUs from 'components/ContactUs/ContactUs';
import Electricity from 'components/Electricity/Electricity';
import Faq from 'components/Faq/Faq';
import Main from 'components/Main/Main';
import React, { useRef } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
 
  text-align: center; 
  margin-top: 226px;
`;

const Section = styled.section`
 margin-bottom: 36px;
`;

const MainContent = ({ mainRef }) => {

    const casesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToCases = () => {
        casesRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainWrapper>
            <Section id="main" ref={mainRef}>
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
                <Faq scrollToContact={scrollToContact} />
            </Section>
            <Section id="contact" ref={contactRef}>
                <ContactUs />
            </Section>
        </MainWrapper>
    );
}

export default MainContent;