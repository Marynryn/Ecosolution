import React from 'react';
import styled from 'styled-components';
import sprite from '../../svg/symbol-defs.svg';

const StyledSvg = styled.svg`
    stroke: var(--main-color);
    fill: transparent;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
`;

const ContainerSvg = styled.div`
    border-radius: 100px;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    display: flex;
    padding: ${({ padding }) => padding};
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SvgContainer = ({ svgId = "icon-arrow-left", size = "16px", backgroundColor = 'var(--accent-color)', padding = "8px", onClick }) => {
    return (
        <ContainerSvg backgroundcolor={backgroundColor} padding={padding} onClick={onClick}>
            <StyledSvg size={size}>
                <use href={`${sprite}#${svgId}`} />
            </StyledSvg>
        </ContainerSvg>
    );
};

export default SvgContainer;
