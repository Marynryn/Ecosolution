import React from 'react'
import styled from 'styled-components';

const Title = styled.h2`
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 28px;
text-transform: uppercase;
margin-bottom:24px;
@media (min-width: 768px) {
    font-size: 36px;

line-height: 36px;
}
`;
const Subtitle = ({ children }) => {
    return (
        <Title>{children}</Title>
    )
}
export default Subtitle;