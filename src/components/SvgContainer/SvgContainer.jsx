import React from 'react';
import styled from 'styled-components';
import sprite from '../../svg/symbol-defs.svg';

const StyledSvg = styled.svg`
    stroke: var(--main-color);
    fill: transparent;
    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
`;

const ContainerSvg = styled.div`
    border-radius: 100px;
    
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: flex;
    padding: ${({ padding }) => padding || 8}px;
    justify-content: center;
    align-items: center;
`;

const SvgContainer = ({ svgId, svgSize = 16, backgroundColor = 'var(--accent-color)', padding, onClick }) => {
    return (
        <ContainerSvg backgroundColor={backgroundColor} padding={padding} onClick={onClick}>
            <StyledSvg svgSize={svgSize}>
                <use href={`${sprite}#${svgId}`} />
            </StyledSvg>
        </ContainerSvg>
    );
};

export default SvgContainer;
