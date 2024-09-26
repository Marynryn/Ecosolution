import Counter from 'components/common/Counter/Counter';
import Line from 'components/Line/Line';
import Subtitle from 'components/ui/Subtitle/Subtitle';
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Container } from 'components/ui/Container/Container';
import content from 'data/electricity.json';

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
 margin: 0 auto 96px ;
 position: relative;
 ::after{
  content: '';
  position: absolute;
  bottom: -72px;
  left: 50%;
 
  width: 1px;
  height: 48px;
  background-color: var(--accent-color);
 }
  @media (min-width: 768px) {
    margin: 0 auto 135px;
    width: 368px;
    ::after{
      height: 87px;
      bottom: -111px;
    }
  }
   @media (min-width: 1280px){
    margin-bottom: 120px;
    width: 491px;
      ::after{
      height: 87px;
      bottom: -104px;
    }
   }
`;

const Electricity = () => {


  return (
    <section>
      <Container>
        <Box>
          <Subtitle>{content.title}</Subtitle>
        </Box>

        <Counter />
      </Container>
    </section>
  );
};

export default Electricity;
