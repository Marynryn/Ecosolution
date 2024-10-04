import React from 'react';
import styled from 'styled-components';
import sprite from 'svg/symbol-defs.svg';


const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
   @media (min-width: 1280px){
    font-size: 24px;
   }
`;

const Question = styled.button`
  display: inline-flex;
  border: none;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  text-align: justify;
  cursor: pointer;
  letter-spacing: -0.72px;
  transition: all 300ms ease-in-out;
  padding: 0;
  &:hover, &:focus{
   svg{
      scale: 1.2; }
  }
  @media (min-width: 768px){gap:16px;}
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
  @media (min-width: 768px){
    margin-left: 32px;
  }

   @media (min-width: 1280px){
    margin:24px 0 0 52px;
     font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
    }
`;



const StyledSvg = styled.svg`
  stroke: var(--accent-color);
  min-width: 16px;
  height: 16px;
    &:hover, &:focus{
  
     scale:1.2; }
  
   @media (min-width: 1280px){ min-width: 28px;
  height: 28px;}
`;

const QuestionAnswer = ({ question, answer, isVisible, onClick }) => {
  return (
    <>
      <Question type='button' onClick={onClick}>

        <StyledSvg viewBox="0 0 16 16">
          <use href={`${sprite}#${isVisible ? 'icon-minus' : 'icon-plus'}`} />
        </StyledSvg>

        <Text>{question}</Text>
      </Question>
      <Answer className={isVisible ? 'active' : ''}>{answer}</Answer>
    </>
  );
};

export default QuestionAnswer;


