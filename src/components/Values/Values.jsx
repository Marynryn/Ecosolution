import React from 'react'
import styled from 'styled-components';
import sprite from "../../svg/symbol-defs.svg";
import Line from 'components/Line/Line';
const values = [
    { title: 'Openness', description: 'to the world, people, new ideas and projects', svg: "icon-maximize-circle" },
    { title: 'Responsibility', description: 'we are aware that the results of our work have an impact on our lives and the lives of future generations', svg: "icon-global-edit" },
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
  }
`;

const ValueItem = styled.div`
 background-color: var(--accent-background);
  padding: 13px 12px 12px;
  height:172px;
 
  text-align: center;
`;

const ValueTitle = styled.h3`
 font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
text-transform: uppercase;

`;

const ValueDescription = styled.p`
font-size: 14px;
font-style: normal;
font-weight: 400;
text-align: justify;
letter-spacing: -0.56px;
margin: 12px 0 0 0;
`;
const StyledSvg = styled.svg`
stroke:var(--main-color);
fill: transparent;
`;
const Container = styled.div`
display: flex;
gap:8px;
margin-bottom: 33px;
align-items: center;
`;
const Values = () => {
    return (
        <ValuesContainer>
            {values.map((value, index) => (
                <ValueItem key={index}>
                    <Container>
                        <StyledSvg width={16} height={16}>
                            <use href={`${sprite}#${value.svg}`} width={16} height={16} />
                        </StyledSvg>
                        <ValueTitle>{value.title}</ValueTitle>
                    </Container>
                    <Line />
                    <ValueDescription>{value.description}</ValueDescription>
                </ValueItem>
            ))}
        </ValuesContainer>
    );
}
export default Values;