import React from 'react'
import { Link as ScrollLink } from "react-scroll";
import styled from 'styled-components';
import content from 'data/common.json';

import contentHero from 'data/main.json';
import SvgContainer from 'components/ui/SvgContainer/SvgContainer';
const Box = styled.div`
margin: 24px auto;
display: flex;
justify-content: center;
 @media (min-width: 768px) {
    margin: 43px auto 0 0;
    align-items: start;
    width: 141px;
  }
`;
const Button = styled(ScrollLink)`
border: 1px solid var(--accent-color);
background-color: transparent;
border-radius: 500px;
height: 39px;
color:var(--main-color);
letter-spacing: -0.64px;
padding: 4px 4px 4px 16px;
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
font-size: 16px;
&:hover{
    border-color: var(--main-color);
    background-color: var(--main-color);
    color: #97D28B;
}
`;
const ButtonLeanMore = () => {
    return (
        <Box >
            <Button to={contentHero.href}
                smooth={true}
                offset={-150}
                duration={500}

                tabIndex={0}>
                {content.learnMore}
                <SvgContainer svgId={"icon-arrow-right"} />
            </Button>

        </Box>
    )
}
export default ButtonLeanMore;