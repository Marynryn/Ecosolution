import React from 'react'
import styled from 'styled-components';


const StyledLine = styled.div`
  background: ${props => props.color || '#97D28B'};
  height: ${props => props.height || '1px'};
  width: ${props => props.width || '100%'};
`;

const Line = ({ width, height, color }) => {
    return (
        <StyledLine width={width} height={height} color={color}></StyledLine>
    );
}
export default Line;