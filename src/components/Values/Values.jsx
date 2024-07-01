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
  margin: 0 auto;
`;

const ValueItem = styled.div`
 background-color: var(--accent-background);
  padding: 20px;
  
 
  text-align: center;
`;

const ValueTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #388e3c;
`;

const ValueDescription = styled.p`
  margin: 0;
  font-size: 1em;
  color: #555;
`;
const StyledSvg = styled.svg`
`;
const Container = styled.div`
display: flex;
gap:8px;`;
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