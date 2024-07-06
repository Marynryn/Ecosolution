import SvgContainer from 'components/SvgContainer/SvgContainer';
import React from 'react'
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
const Container = styled.div`
display: flex;
margin-bottom: 7px;
gap:12px;
@media (min-width: 768px){
    margin: 0;
}
@media (min-width: 1280px){
    gap: 24px;
 
}
`;
const Button = styled.div`
display: flex;
height: 66px;
width: 66px;
border: 1px solid var(--main-color);
 border-radius: 100px;
   &:hover{
    border-color: var(--accent-color);
    svg{
        stroke: var(--accent-color);
  
    }
 }
 @media (min-width: 1280px){
    height: 84px;
width: 84px;
padding: 8px;
 
}
`;

const ScrollButtons = ({ onNext, onPrev }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

    return (
        <Container>
            <Button onClick={onPrev} type='button'>
                <SvgContainer svgId="icon-arrow-left" size="36px" backgroundColor="transparent" padding={isDesktop ? '24px' : '15px'} />

            </Button>
            <Button onClick={onNext} type='button'>
                <SvgContainer svgId="icon-arrow-right" size="36px" backgroundColor="transparent" padding={isDesktop ? '24px' : '15px'} />
            </Button>


        </Container>
    )
}
export default ScrollButtons;