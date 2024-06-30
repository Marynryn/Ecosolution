import React from 'react'
import sprite from "../../svg/symbol-defs.svg"
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap:4px;
  
`;
const SvgLogo = styled.svg`
    fill: var(--main-color);
    width: 170px;
    height: 40px;
  &:hover{
    fill: var(--accent-color);
  };

`;
const StyledSvg = styled.svg`
  padding-top: 5px;
`;
const Logo = () => {
    return (
        <Container>
            <StyledSvg width={31} height={18}>
                <use href={`${sprite}#icon-bgAsset-324-2`} />
            </StyledSvg>
            <SvgLogo >
                <use href={`${sprite}#icon-ecosolution`} />
            </SvgLogo>
            <StyledSvg width={60} height={18}>
                <use href={`${sprite}#icon-GREENERGY-FOR-LIFE`} />
            </StyledSvg>

        </Container>
    )
}
export default Logo;