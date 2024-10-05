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
  transition: all 300ms ease-in-out;
  &:hover, &:focus {
    stroke: var(--accent-color);
  }
`;
const MapLink = styled.a`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-top: 8px;
  &:hover ${StyledSvg} {
    stroke: var(--accent-color);
  }
  @media (min-width:1280px){
margin-top: 16px;
}
`;

const Address = () => {
  return (
    <Box>
      <Paragraph>{content.address.title}</Paragraph>
      <MapLink href={content.address.href} target="_blank"
        rel="noopener noreferrer nofollow">
        <StyledSvg>
          <use href={`${sprite}#icon-map`} />
        </StyledSvg>
        <Text>{content.address.address}</Text>
      </MapLink>
    </Box>
  );
}

export default Address;
