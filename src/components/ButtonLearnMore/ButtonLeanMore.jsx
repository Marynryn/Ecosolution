import React from 'react'
import sprite from '../../svg/symbol-defs.svg';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';

const Button = styled.button`
border: 1px solid var(--accent-color);
border-radius: 500px;
height: 39px;
padding: 4px 4px 4px 16px;
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
font-size: 16px;
margin: 24px auto;
&:hover{
    border-color: var(--main-color);
    background-color: var(--main-color);
    color: #97D28B;
}
`;
const StyledSvg = styled.svg`
    stroke: var(--main-color);
    fill: transparent;
    width: 16px;
    height: 16px;
`;
const ContainerSvg = styled.div`
    border-radius: 100px;
    background-color: var(--accent-color);
    display: flex;
padding: 8px;
justify-content: center;
align-items: center;
`;
const ButtonLeanMore = ({ onClick }) => {
    return (
        <div>
            <Button onClick={onClick}>
                <Paragraph>Learn More</Paragraph>
                <ContainerSvg>
                    <StyledSvg width={16} height={16}>
                        <use href={`${sprite}#icon-arrow-right`} width={16} height={16} />
                    </StyledSvg>
                </ContainerSvg>
            </Button>

        </div>
    )
}
export default ButtonLeanMore;