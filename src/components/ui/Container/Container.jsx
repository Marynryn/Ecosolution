import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.div`
     padding-left:  20px;
     padding-right: 20px;
    @media (min-width: 480px){
width: 440px;
margin: 0 auto;
    }
  @media (min-width: 768px) {
    padding-left:  30px;
     padding-right: 30px;
    
    width: 708px;
;  }
 @media (min-width: 1280px) {
   padding-left:  20px;
     padding-right: 20px;
    width: 1240px;
;  } 
`
export const Container = ({ children }) => {
    return (
        <SectionContainer>{children}</SectionContainer>
    )
}
