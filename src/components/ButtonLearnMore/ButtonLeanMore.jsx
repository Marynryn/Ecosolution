import React from 'react'
import sprite from '../../svg/symbol-defs.svg';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import SvgContainer from 'components/SvgContainer/SvgContainer';

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

const ButtonLeanMore = ({ onClick }) => {
    return (
        <div>
            <Button onClick={onClick}>
                <Paragraph>Learn More</Paragraph>
                <SvgContainer svgId={"icon-arrow-right"} />
            </Button>

        </div>
    )
}
export default ButtonLeanMore;