import React from 'react'
import styled from 'styled-components';
import sprite from "../../svg/symbol-defs.svg";
import Line from 'components/Line/Line';
import img1 from 'img/tablet/wind-farms-fields 1.png';
import img2 from 'img/tablet/man-worker-firld-by-solar-panels 1.png';

const values = [
  { title: 'Openness', description: 'to the world, people, new ideas and projects', svg: "icon-maximize-circle" },
  { title: 'Responsibility', description: 'we are aware that the results of our work have an impact on our lives and the lives of future generations', svg: "icon-global-edit" },
  { type: 'image', src: img1, alt: "wind-farms-fields" },
  { type: 'image', src: img2, alt: "man-worker-firld-by-solar-panels" },
  { title: 'Innovation', description: 'we use the latest technology to implement non-standard solutions', svg: "icon-cpu-charge" },

  { title: 'Quality', description: 'we do not strive to be the first among others, but we want to be the best in our business', svg: "icon-ranking" },
];

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
  gap: 24px;
  width: 100%;
  margin: 36px auto 0;

  @media (min-width: 768px) {
    margin-top: 100px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax( 274px, 1fr));
    margin-top: 124px;
    gap: 48px;
  }
`;

const ValueItem = styled.div`
  background-color: var(--accent-background);
  padding: 13px 12px 12px;
  height: 172px;
  text-align: center;
    @media (min-width: 1280px){
  height: 243px;
  padding: 48px 24px;
 }
`;

const ValueTitle = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  text-transform: uppercase;
   @media (min-width: 1280px){
     font-size: 32px;

  line-height: 48px;
   }
`;

const ValueDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: justify;
  letter-spacing: -0.56px;
  margin: 12px 0 0 0;
   @media (min-width: 1280px){
    margin-top: 24px;
      font-size: 16px;
   }
`;

const StyledSvg = styled.svg`
  stroke: var(--main-color);
  fill: transparent;
  width: 16px;
  height: 16px;
  @media (min-width:1280px){
    width: 24px;
    height: 24px;
  
  }
`;

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 33px;
  align-items: center;
   @media (min-width: 1280px){
    margin-bottom: 94px;
    }
`;

const ImageItem = styled.img`
display: none;
@media (min-width: 768px){
    grid-column: span 2;
 display: block;
  height: 100%; 
}
 @media (min-width: 1280px){
margin: 0 auto;
 }
`;

const Values = () => {
  return (
    <ValuesContainer>
      {values.map((value, index) => (
        value.type === 'image' ? (
          <ImageItem key={index} src={`${value.src}`} alt={value.alt} />
        ) : (
          <ValueItem key={index}>
            <Container>
              <StyledSvg >
                <use href={`${sprite}#${value.svg}`} />
              </StyledSvg>
              <ValueTitle>{value.title}</ValueTitle>
            </Container>
            <Line />
            <ValueDescription>{value.description}</ValueDescription>
          </ValueItem>
        )
      ))}
    </ValuesContainer>
  );
}

export default Values;
