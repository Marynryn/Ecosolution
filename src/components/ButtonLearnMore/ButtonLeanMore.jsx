import React from 'react'
import TransparentButton from 'components/TransparentButton/TransparentButton';
import styled from 'styled-components';

const Box = styled.div`
margin: 24px auto;
display: flex;
justify-content: center;
 @media (min-width: 768px) {
    margin: 43px auto 0 0;
    align-items: start;
    width: 141px;
  }
`;

const ButtonLeanMore = ({ onClick }) => {
    return (
        <Box >
            <TransparentButton onClick={onClick}>
                Learn More
            </TransparentButton>

        </Box>
    )
}
export default ButtonLeanMore;