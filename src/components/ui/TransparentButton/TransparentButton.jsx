import React from 'react'

import styled from 'styled-components';
import Paragraph from 'components/ui/Paragraph/Paragraph';
import SvgContainer from 'components/ui/SvgContainer/SvgContainer';

const Button = styled.button`
border: 1px solid var(--accent-color);
background-color: transparent;
border-radius: 500px;
height: 39px;
padding: 4px 4px 4px 16px;
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
font-size: 16px;
&:hover{
    border-color: var(--main-color);
    background-color: var(--main-color);
    color: #97D28B;
}
`;

const TransparentButton = ({ children, onClick }) => {
    return (
        <div>
            <Button onClick={onClick} >
                <Paragraph>{children}</Paragraph>
                <SvgContainer svgId={"icon-arrow-right"} />
            </Button>

        </div>
    )
}
export default TransparentButton;