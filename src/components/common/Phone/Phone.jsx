import Paragraph from 'components/ui/Paragraph/Paragraph';
import React from 'react';
import sprite from "svg/symbol-defs.svg";
import styled from 'styled-components';
import content from 'data/contact.json';

export const Box = styled.div`
margin-bottom: 24px;
@media (min-width:1280px){
margin-top: 32px;
}
`;
const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--main-color);
  fill: transparent;
  &:hover {
    stroke: var(--accent-color);
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.8px;
  text-align: left;
 
  @media (min-width:1280px){
font-size: 24px;
}
`;

const PhoneNumber = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  color: inherit;
margin-top:8px;
margin-bottom: 12px;
  &:hover ${StyledSvg} {
    stroke: var(--accent-color);
  }
@media (min-width:1280px){
margin-top: 16px;

}
`;

const Phone = () => {
  return (
    <Box >
      <Paragraph>{content.phone.title}</Paragraph>
      <PhoneNumber href={content.phone.href1}>
        <StyledSvg>
          <use href={`${sprite}#icon-call`} />
        </StyledSvg>
        <Text>{content.phone.number1}</Text>
      </PhoneNumber>
      <PhoneNumber href={content.phone.href2}>
        <StyledSvg>
          <use href={`${sprite}#icon-call`} />
        </StyledSvg>
        <Text>{content.phone.number2}</Text>
      </PhoneNumber>
    </Box>
  );
}

export default Phone;
