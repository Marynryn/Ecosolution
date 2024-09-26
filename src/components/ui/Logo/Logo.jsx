import React from 'react'
import sprite from "svg/symbol-defs.svg"
import styled from 'styled-components';



const Link = styled.a`
    display: inline-flex;
    align-items: center;
    transition: all 300ms ease-in-out;
    gap:4px;
    &:hover, &:focus{
        cursor: pointer;
        svg{

        
fill: var(--accent-color);}
    }
  
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
        <Link href='/'>
            <StyledSvg width={31} height={18}>
                <use href={`${sprite}#icon-bgAsset-324-2`} />
            </StyledSvg>
            <SvgLogo >
                <use href={`${sprite}#icon-ecosolution`} />
            </SvgLogo>
            <StyledSvg width={60} height={18}>
                <use href={`${sprite}#icon-GREENERGY-FOR-LIFE`} />
            </StyledSvg>

        </Link>
    )
}
export default Logo;