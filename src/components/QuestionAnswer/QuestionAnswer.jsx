import React from 'react';
import styled, { css } from 'styled-components';
import sprite from '../../svg/symbol-defs.svg';

const Container = styled.div`
  margin: 16px 0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  text-align: justify;
  cursor: pointer;
  letter-spacing: -0.72px;

`;

const Answer = styled.p`
  text-align: justify;
  margin: 16px 0 0 24px;
  display: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.56px;
  ${props => props.isVisible && css`
    display: block;
  `}
`;

const Icon = styled.div`
  font-size: 24px;
  color: var(--accent-color);
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const StyledSvg = styled.svg`
  stroke: var(--accent-color);
  width: 16px;
  height: 16px;
`;

const QuestionAnswer = ({ question, answer, isVisible, onClick }) => {
    return (
        <Container>
            <Question onClick={onClick}>

                <Icon>
                    {isVisible ? (
                        <StyledSvg>
                            <use href={`${sprite}#icon-minus`} />
                        </StyledSvg>
                    ) : (
                        <StyledSvg>
                            <use href={`${sprite}#icon-plus`} />
                        </StyledSvg>
                    )}
                </Icon>
                <Text>{question}</Text>
            </Question>
            <Answer isVisible={isVisible}>{answer}</Answer>
        </Container>
    );
};

export default QuestionAnswer;

