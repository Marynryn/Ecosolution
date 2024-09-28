import SvgContainer from 'components/ui/SvgContainer/SvgContainer';
import React from 'react'
import styled from 'styled-components';
import content from 'data/cases.json';

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
const Button = styled.button`
display: inline-flex;
height: 66px;
width: 66px;
padding: 0;
align-items: center;
justify-content: center;
transition: all 300ms ease;
cursor: pointer;
border: 1px solid;
background-color: transparent;
border-color: var(--main-color);
 border-radius: 100px;
   &:hover, &:focus{
    border-color: var(--accent-color);
    svg{
        stroke: var(--accent-color);
    }
 }
 @media (min-width: 1280px){
    height: 84px;
width: 84px;

 
}
`;

const ScrollButtons = ({ onNext, onPrev }) => {


    return (
        <Container>
            <Button onClick={onPrev} type='button'>
                <SvgContainer svgId="icon-arrow-left" size="36px" backgroundColor="transparent" aria-label={content.ariaLabel.buttonPrev} />

            </Button>
            <Button onClick={onNext} type='button'>
                <SvgContainer svgId="icon-arrow-right" size="36px" backgroundColor="transparent" aria-label={content.ariaLabel.buttonNext} />
            </Button>


        </Container>
    )
}
export default ScrollButtons;