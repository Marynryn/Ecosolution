import React from 'react';
import styled from 'styled-components';
import sprite from '../../svg/symbol-defs.svg';

const StyledIcon = styled.svg`
  fill: ${({ fill }) => fill || 'transparent'};
  stroke: ${({ stroke }) => stroke || 'var(--white)'};
  stroke-width: 2;
  transition: stroke 0.3s;

  &:hover {
    stroke: ${({ hover }) => hover || 'var(--accent-color)'};
  }
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  fill: ${({ fill }) => fill || 'var(--white)'};
  transition: fill 0.3s;

  &:hover {
    fill: ${({ hover }) => hover || 'var(--accent-color)'};
  }

  &:focus {
    outline: 2px solid ${({ hover }) => hover || 'var(--accent-color)'};
    outline-offset: 2px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: ${({ gap }) => gap || '8px'};
`;

const SocialIcons = ({ props = {} }) => {
    const {
        fill = 'var(--white)',
        stroke = 'var(--white)',
        hover = 'var(--accent-color)',
        gap = '8px',
    } = props;

    return (
        <SocialContainer gap={gap}>
            <SocialButton as="a" href="https://www.facebook.com" target="_blank" aria-label="Facebook" fill={fill} hover={hover}>
                <StyledIcon width={24} height={24} stroke={stroke} hover={hover}>
                    <use href={`${sprite}#icon-facebook`} />
                </StyledIcon>
            </SocialButton>
            <SocialButton as="a" href="https://www.instagram.com" target="_blank" aria-label="Instagram" fill={fill} hover={hover}>
                <StyledIcon width={24} height={24} stroke={stroke} hover={hover}>
                    <use href={`${sprite}#icon-instagram`} />
                </StyledIcon>
            </SocialButton>
        </SocialContainer>
    );
};

export default SocialIcons;

