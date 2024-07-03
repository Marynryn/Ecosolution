import { StyledSvg, Text } from 'components/Phone/Phone';
import React from 'react';
import sprite from "../../svg/symbol-defs.svg";
import Paragraph from 'components/Paragraph/Paragraph';
import styled from 'styled-components';

const EmailLink = styled.a`
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

const Email = () => {
    return (
        <div style={{ marginBottom: "24px" }}>
            <Paragraph>Email:</Paragraph>
            <EmailLink href="mailto:office@ecosolution.com">
                <StyledSvg>
                    <use href={`${sprite}#icon-sms`} />
                </StyledSvg>
                <Text>office@ecosolution.com</Text>
            </EmailLink>
        </div>
    );
}

export default Email;
