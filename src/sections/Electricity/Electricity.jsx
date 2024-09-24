import Counter from 'components/common/Counter/Counter';
import Line from 'components/Line/Line';
import Subtitle from 'components/ui/Subtitle/Subtitle';
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Container } from 'components/ui/Container/Container';

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
   @media (min-width: 1280px){
    margin : 17px auto;
   }
`;

const Box = styled.div`
 width:286px;
  text-align: center;
 margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 368px;
  }
   @media (min-width: 1280px){
    width: 491px;
   }
`;

const Electricity = () => {
  const isTabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <section>
      <Container>
        <Box>
          <Subtitle>Electricity we produced for all time</Subtitle>
        </Box>
        <LineContainer>
          <Line width="1px" height={isTabletOrLarger ? '87px' : '48px'} />
        </LineContainer>
        <Counter />
      </Container>
    </section>
  );
};

export default Electricity;
