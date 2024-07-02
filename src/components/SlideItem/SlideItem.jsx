import React from 'react'
import styled from 'styled-components';
import Line from 'components/Line/Line';
import SvgContainer from 'components/SvgContainer/SvgContainer';

const Button = styled.div`
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
`;
const Image = styled.img`
  width: 320px;
  height: 160px;
`;
const Container = styled.div`
  padding: 21px 12px 12px;
`;
const ItemContainer = styled.div`
  margin-bottom: 21px;
  display: flex;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  width: 175px;
`;
const TextContainer = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  letter-spacing: -0.74px;
  text-align: justify;
`;
const Text = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  letter-spacing: -0.48px;
  text-align: justify;
`;

const SlideItem = ({ props, onNext }) => {
    return (
        <div style={{ backgroundColor: "var(--accent-background)", marginTop: "24px" }}>
            <Image src={`${props.img}`} alt={props.description} />
            <Container>
                <ItemContainer>
                    <TitleContainer>
                        <Title>{props.city} {props.title}</Title>
                    </TitleContainer>
                    <Button onClick={onNext} type='button'>
                        <SvgContainer svgId={"icon-arrow-right-2"} svgSize={28} backgroundColor={'transparent'} padding={16} />
                    </Button>
                </ItemContainer>
                <Line />
                <TextContainer>
                    <Text>{props.description}</Text>
                    <Text>{props.date}</Text>
                </TextContainer>
            </Container>
        </div>
    );
}

export default SlideItem;
