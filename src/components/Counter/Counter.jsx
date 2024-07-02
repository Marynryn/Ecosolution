import { formatNumberWithDots } from 'helpers/formatNumberWithDots';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: var(--accent-color);
  display: flex;
  gap:8px;
  align-items: center;
  justify-content: center;
`;
const CounterTitle = styled.h5`
color: var(--main-color);
font-size: 24px;
`;
const Timer = styled.h1`
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 48px;
`;
const Counter = () => {
    const targetDate = new Date('2024-07-02T10:22:00');
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
        <CounterTitle>kWh</CounterTitle>
    </CounterWrapper>;
};

export default Counter;
