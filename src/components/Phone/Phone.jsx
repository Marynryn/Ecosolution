import Paragraph from 'components/Paragraph/Paragraph';
import React from 'react';
import sprite from "../../svg/symbol-defs.svg";
import styled from 'styled-components';



export const StyledSvg = styled.svg`
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
  width: 212px;
`;

const PhoneNumber = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  color: inherit;
margin-top:8px;
margin-bottom: 12px;
`;

const Phone = () => {
    return (
        <div style={{ marginBottom: "24px" }}>
            <Paragraph>Phone:</Paragraph>
            <PhoneNumber href="tel:380981234567">
                <StyledSvg>
                    <use href={`${sprite}#icon-call`} />
                </StyledSvg>
                <Text>38 (098) 12 34 567</Text>
            </PhoneNumber>
            <PhoneNumber href="tel:380931234567">
                <StyledSvg>
                    <use href={`${sprite}#icon-call`} />
                </StyledSvg>
                <Text>38 (093) 12 34 567</Text>
            </PhoneNumber>
        </div>
    );
}

export default Phone;
