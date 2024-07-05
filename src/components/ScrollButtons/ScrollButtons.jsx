import SvgContainer from 'components/SvgContainer/SvgContainer';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
margin-bottom: 7px;
gap:12px;
@media (min-width: 768px){
    margin: 0;
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
`;

const ScrollButtons = ({ onNext, onPrev }) => {
    return (
        <Container>
            <Button onClick={onPrev} type='button'>
                <SvgContainer svgId="icon-arrow-left" size="36px" backgroundColor="transparent" padding="15px" />

            </Button>
            <Button onClick={onNext} type='button'>
                <SvgContainer svgId="icon-arrow-right" size="36px" backgroundColor="transparent" padding="15px" />
            </Button>


        </Container>
    )
}
export default ScrollButtons;