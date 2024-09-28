import React from 'react';
import styled from 'styled-components';
import sprite from 'svg/symbol-defs.svg';

const Container = styled.div`
  margin: 16px 0;
   @media (min-width: 1280px){
    margin: 24px 0;
   }
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
   @media (min-width: 1280px){
    font-size: 24px;
   }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  text-align: justify;
  cursor: pointer;
  letter-spacing: -0.72px;
   @media (min-width: 1280px){gap:24px;}
`;

const Answer = styled.p`
  text-align: justify;
  margin: 16px 0 0 24px;
  display: none;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.56px;

  &.active {
    display: block;
  }
   @media (min-width: 1280px){
    margin:24px 0 0 52px;
     font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
    }
`;

const Icon = styled.div`
  font-size: 24px;
  color: var(--accent-color);
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media (min-width: 1280px){ width: 28px;
  height: 28px;}
`;

const StyledSvg = styled.svg`
  stroke: var(--accent-color);
  width: 16px;
  height: 16px;
   @media (min-width: 1280px){ width: 28px;
  height: 28px;}
`;

const QuestionAnswer = ({ question, answer, isVisible, onClick }) => {
  return (
    <Container>
      <Question onClick={onClick}>
        <Icon>
          <StyledSvg>
            <use href={`${sprite}#${isVisible ? 'icon-minus' : 'icon-plus'}`} />
          </StyledSvg>
        </Icon>
        <Text>{question}</Text>
      </Question>
      <Answer className={isVisible ? 'active' : ''}>{answer}</Answer>
    </Container>
  );
};

export default QuestionAnswer;


