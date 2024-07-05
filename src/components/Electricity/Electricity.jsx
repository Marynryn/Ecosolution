import Counter from 'components/Counter/Counter';
import Line from 'components/Line/Line';
import Subtitle from 'components/Subtitle/Subtitle';
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
`;

const Box = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 368px;
  }
`;

const Electricity = () => {
    const isTabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <div>
            <Box>
                <Subtitle>Electricity we produced for all time</Subtitle>
            </Box>
            <LineContainer>
                <Line width="1px" height={isTabletOrLarger ? '87px' : '48px'} />
            </LineContainer>
            <Counter />
        </div>
    );
};

export default Electricity;
