import { formatNumberWithDots } from 'helpers/formatNumberWithDots';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import content from 'data/electricity.json';
const CounterWrapper = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: var(--accent-color);
  display: flex;
  gap:8px;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px){
    gap: 24px;
  }
`;
const CounterTitle = styled.h5`
color: var(--main-color);
font-size: 24px;
line-height: 24px;
font-weight: 400;
@media (min-width: 768px){
    font-size: 28px;
    line-height: 48px;
}@media (min-width: 1280px){
    font-size: 48px;
  
}
`;
const Timer = styled.h4`
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 48px;
min-width:275px;
text-align: left;
@media (min-width: 768px){
    font-size: 100px;
    line-height: 100px;
    min-width:590px;
}
@media (min-width: 1280px){
    font-size: 164px;
    line-height: 164px;
    min-width:965px;
}
`;
const Counter = () => {
    const targetDate = new Date('1990-06-02T10:22:00');
    const initialTimeDiff = Math.floor((Date.now() - targetDate.getTime()) / 1000);

    const [count, setCount] = useState(initialTimeDiff);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <CounterWrapper>
        <Timer>{formatNumberWithDots(count)}</Timer>
        <CounterTitle>{content.subtitle}</CounterTitle>
    </CounterWrapper>;
};

export default Counter;
