import React from 'react'
import styled from 'styled-components';
import Line from 'components/Line/Line';
import SvgContainer from 'components/SvgContainer/SvgContainer';

const Button = styled.div`
 margin-bottom: 21px;
  display: flex;
  height: 60px;
  width: 60px;
  border: none;
  background-color: var(--accent-color);
  border-radius: 100px;
   &:hover{
    background-color: var(--main-color);
    svg{
        stroke: var(--accent-color);
  
    }
 }
  @media (min-width: 768px){
    margin-bottom: 21px;
  }
`;
const Image = styled.img`
  
  width: 100%;
  height: 160px;
  @media (min-width: 1280px){
    height: 296px;
  }
`;
const Container = styled.div`
  padding: 21px 12px 12px;
  @media (min-width:1280px){
   padding: 36px 48px;
  }
`;
const Box = styled.div`
  width: 100%;
  margin: 24px auto 0;
  background-color: var(--accent-background);
  max-width: 342px;
  @media (min-width: 1280px){
    height:506px; 
    max-width: 596px
  }
`;
const ItemContainer = styled.div`

  display: flex;
  justify-content: space-between;

`;
const TitleContainer = styled.div`
  width: 205px;
    @media (min-width:768px){
   width: 230px;
  }
    @media (min-width:1280px){
   width: 357px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
     @media (min-width:1280px){
      margin-top: 24px;
     }
`;
const Title = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  letter-spacing: -0.74px;
 
  @media (min-width:768px){
    font-size: 20px;
  }
    @media (min-width:1280px){
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
const Text = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  letter-spacing: -0.48px;
  text-align: justify;
    @media (min-width:768px){
    font-size: 14px;
  }
     @media (min-width:1280px){
font-size: 16px;

     }
`;

const SlideItem = ({ props, onNext }) => {
  return (
    <Box >
      <Image src={`${props.img}`} srcSet={`${props.img} 1x, ${props.img2} 2x`} alt={props.description} />
      <Container>
        <ItemContainer>
          <TitleContainer>
            <Title>{props.city}</Title>
            <Title> {props.title}</Title>
          </TitleContainer>
          <Button onClick={onNext} type='button'>
            <SvgContainer svgId="icon-arrow-right-2" size="28px" backgroundColor='transparent' padding="16px" />
          </Button>
        </ItemContainer>
        <Line />
        <TextContainer>
          <Text>{props.description}</Text>
          <Text>{props.date}</Text>
        </TextContainer>
      </Container>
    </Box>
  );
}

export default SlideItem;