import { Box, Text } from 'components/common/Phone/Phone';
import React from 'react';
import sprite from "svg/symbol-defs.svg";
import Paragraph from 'components/ui/Paragraph/Paragraph';
import styled from 'styled-components';
import content from 'data/contact.json';
const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--main-color);
  fill: transparent;
  &:hover {
    stroke: var(--accent-color);
  }
`;
const EmailLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  color: inherit;
margin-top: 8px;
width: 100%;
transition: all 300ms ease-in-out;
  &:hover ${StyledSvg},  &:focus ${StyledSvg} {
    stroke: var(--accent-color);
  }
  @media (min-width:1280px){
margin-top: 16px;
}
`;

const Email = () => {
  return (
    <Box >
      <Paragraph>{content.email.title}</Paragraph>
      <EmailLink href={content.email.href}>
        <StyledSvg>
          <use href={`${sprite}#icon-sms`} />
        </StyledSvg>
        <Text>{content.email.email}</Text>
      </EmailLink>
    </Box>
  );
}

export default Email;
