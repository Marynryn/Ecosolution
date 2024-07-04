import React from 'react'

import TransparentButton from 'components/TransparentButton/TransparentButton';
import styled from 'styled-components';

const Box = styled.div`
margin: 24px auto;
display: flex;
justify-content: center;
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