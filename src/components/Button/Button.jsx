import React from 'react'
import styled from 'styled-components';


const ButtonDiv = styled.button`
font-family: "Fira Sans";
border: none;
  background-color: var(--accent-color);
border-radius: 500px;
height: 39px;
padding:10px 16px;
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
font-size: 16px;
letter-spacing: -0.64px;
margin: 0 auto ;
&:hover{
    
    background-color: var(--main-color);
    color: #97D28B;
    div{
       background-color: #97D28B;   
    }
}
`;

const Button = ({ onClick, children }) => {
    return (
        <div>
            <ButtonDiv onClick={onClick}>
                {children}
            </ButtonDiv>

        </div>
    )
}
export default Button;