import { Box, Text } from 'components/Phone/Phone';
import React from 'react';
import sprite from "../../svg/symbol-defs.svg";
import Paragraph from 'components/Paragraph/Paragraph';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--main-color);
  fill: transparent;
  &:hover {
    stroke: var(--accent-color);
  }
`;
const MapLink = styled.a`
  display: flex;
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
      <Paragraph>Address:</Paragraph>
      <MapLink href="https://maps.google.com/?q=79005+Ukraine+Lviv+street+Shota+Rustaveli+7" target="_blank" rel="noopener noreferrer">
        <StyledSvg>
          <use href={`${sprite}#icon-map`} />
        </StyledSvg>
        <Text>79005, Ukraine, Lviv, street Shota Rustaveli, 7</Text>
      </MapLink>
    </Box>
  );
}

export default Address;
