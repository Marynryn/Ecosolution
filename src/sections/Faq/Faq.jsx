
import Line from 'components/Line/Line';
import QuestionAnswer from 'components/QuestionAnswer/QuestionAnswer';
import Subtitle from 'components/ui/Subtitle/Subtitle';
import React, { useState } from 'react';
import styled from 'styled-components';

import Paragraph from 'components/ui/Paragraph/Paragraph';
import Button from 'components/ui/Button/Button';
import { Container } from 'components/ui/Container/Container';

const FAQContainer = styled.div`
  margin: 0 auto;
   @media (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1fr;
 }
  @media (min-width: 1280px){
    gap:48px;
  }
`;
const Text = styled.p`
  margin: 0 ;
 font-size: 18px;
font-style: normal;
font-weight: 400;
letter-spacing: -0.72px;
  @media (min-width: 1280px){
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
const List = styled.ul`
  margin: 0;
  text-decoration: none;
 margin-bottom: 36px;
   @media (min-width: 768px) {
   
   margin: 0;
   margin-bottom: -16px;
 }
`;
const Item = styled.li`
  margin: 0 auto;
 
`;
const ButtonBox = styled.div`
  margin: 12px auto;
 width: 130px;
  @media (min-width: 768px){
    margin-bottom: 0;
  }
`;
export const Circle = styled.div`
 border-radius: 100%;
 width: 14px;
height: 14px;
background-color: var(--main-color);
 &:hover{
    background-color: var(--accent-color);
    
 }
`;
const Box = styled.div`
   @media (min-width: 768px) {
   width: 342px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
 }
   @media (min-width: 1280px){
    text-align: center;
    margin-left: 137px;
     width: 399px;
  }
`;
const BoxTitle = styled.div`
 display: none;
  @media (min-width: 768px) {
    display: block;
     text-align: left;
   
 }
`;
const BoxSubtitle = styled.div`
 display: block;
 margin-bottom: 24px;
 text-align: left;
 @media (min-width: 768px) {
    display: none;
 }

`;
const questionsAndAnswers = [
  {
    question: 'How do wind turbines and solar panels work together in a renewable energy system?',
    answer: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer: 'Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions.',
  },
  {
    question: 'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
    answer: "Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions.Our tailored approach ensures cost- effective, eco - friendly energy solutions, fostering environmental responsibility, reducing long - term operational costs, and promoting energy independence for a resilient future.",
  },
  {
    question: 'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
    answer: 'EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact.',
  },
  {
    question: 'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
    answer: 'EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all.',
  },
];

const Faq = ({ scrollToContact }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq'>
      <Container>
        <FAQContainer>
          <BoxSubtitle >
            <Subtitle>Frequently Asked Questions</Subtitle>
          </BoxSubtitle>
          <div>
            <Line />
            <List>
              {questionsAndAnswers.map((item, index) => (
                <Item key={index}>
                  <QuestionAnswer
                    question={item.question}
                    answer={item.answer}
                    isVisible={openIndex === index}
                    onClick={() => handleToggle(index)}
                  />
                  {index !== questionsAndAnswers.length - 1 && <Line />}
                </Item>
              ))}</List>
          </div>
          <Box>
            <BoxTitle >
              <Subtitle>Frequently Asked Questions</Subtitle>
            </BoxTitle>
            <div>
              <Text>Didn't find the answer to your question? </Text>
              <ButtonBox><Button onClick={scrollToContact}><Paragraph>Contact Us</Paragraph>
                <Circle></Circle>
              </Button></ButtonBox></div>
          </Box>
        </FAQContainer>
      </Container>
    </section>
  );
};

export default Faq;
