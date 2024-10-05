
import QuestionAnswer from 'components/common/QuestionAnswer/QuestionAnswer';
import Subtitle from 'components/ui/Subtitle/Subtitle';
import React, { useState } from 'react';
import styled from 'styled-components';
import Paragraph from 'components/ui/Paragraph/Paragraph';
import { Container } from 'components/ui/Container/Container';
import content from 'data/faq.json';
import { ScrollButton } from 'components/ui/ScrollButton/ScrollButton';


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
  
  
 }
`;

const Item = styled.li`
 margin-top:32px;
    position: relative;
     &:first-child {
    margin-top: 16px; 
  }
  ::before{
    content: "";
    position: absolute;
    top: -16px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--accent-color);
  
   }
 
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
 margin-bottom: 41px;
 text-align: left;
 @media (min-width: 768px) {
    display: none;
 }

`;


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq'>
      <Container>
        <FAQContainer>
          <BoxSubtitle >
            <Subtitle>{content.title}</Subtitle>
          </BoxSubtitle>

          <List>
            {content.questionsAndAnswers.map((item, index) => (
              <Item key={index}>
                <QuestionAnswer
                  question={item.question}
                  answer={item.answer}
                  isVisible={openIndex === index}
                  onClick={() => handleToggle(index)}
                />

              </Item>
            ))}</List>

          <Box>
            <BoxTitle >
              <Subtitle>{content.subtitle}</Subtitle>
            </BoxTitle>
            <div>
              <Text>{content.text} </Text>
              <ButtonBox><ScrollButton href={content.href}><Paragraph>{content.button}</Paragraph>
                <Circle></Circle>
              </ScrollButton></ButtonBox></div>
          </Box>
        </FAQContainer>
      </Container>
    </section>
  );
};

export default Faq;
