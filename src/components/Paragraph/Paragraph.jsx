import React from 'react'
import styled from 'styled-components';

const Text = styled.p`
flex: 1;
text-align: justify;
    font-size: 16px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.62px;
margin:0;

`;
const Paragraph = ({ children }) => {
    return (
        <Text>{children}</Text>
    )
}
export default Paragraph;