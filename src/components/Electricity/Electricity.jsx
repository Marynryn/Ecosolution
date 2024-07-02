import Counter from 'components/Counter/Counter';
import Line from 'components/Line/Line';
import Subtitle from 'components/Subtitle/Subtitle';
import React from 'react'
import styled from 'styled-components';

const LineContainer = styled.div`
display: flex;
justify-content:center;
    margin: 24px auto;
`;
const Electricity = () => {
    return (
        <div><Subtitle>Electricity we produced
            for all time</Subtitle>
            <LineContainer>
                <Line width={'1px'} height={'48px'} />
            </LineContainer>
            <Counter />
        </div>
    )
}
export default Electricity;