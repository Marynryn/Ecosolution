import { Box, StyledSvg, Text } from 'components/Phone/Phone';
import React from 'react';
import sprite from "../../svg/symbol-defs.svg";
import Paragraph from 'components/Paragraph/Paragraph';
import styled from 'styled-components';

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
`;

const Address = () => {
    return (
        <div style={{ marginBottom: "24px" }}>
            <Paragraph>Address:</Paragraph>
            <MapLink href="https://maps.google.com/?q=79005+Ukraine+Lviv+street+Shota+Rustaveli+7" target="_blank" rel="noopener noreferrer">
                <StyledSvg>
                    <use href={`${sprite}#icon-map`} />
                </StyledSvg>
                <Text>79005, Ukraine, Lviv, street. Shota Rustaveli, 7</Text>
            </MapLink>
        </div>
    );
}

export default Address;
