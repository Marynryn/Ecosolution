import Logo from 'components/Logo/Logo';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sprite from "../../svg/symbol-defs.svg";
import Button from 'components/Button/Button';
import { Circle } from 'components/Faq/Faq';
import Paragraph from 'components/Paragraph/Paragraph';

const Container = styled.header`
   
    padding: 36px 20px;
    position: fixed;
    z-index: 5;   
    top: 0;
    left: 0;
   text-align: center;
    width: calc(100% - 40px);
    transition: background-color 0.3s ease; 

    &.scrolled {
        background-color: var(--white);
    }

    @media (min-width: 768px) {
        padding: 36px 30px 40px 30px;
      width: calc(100% - 60px)
    }

    @media (min-width: 1280px) {
        padding: 24px 20px;
        margin: 0 auto;
       width: calc(100% - 40px)
    }
`;
const BoxHeader = styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
   
      @media (min-width: 480px){
width: 440px;
margin: 0 auto;
    }
    @media (min-width: 768px){
         width: 708px;
         
    }
      @media (min-width: 1280px){
         width: 1240px;
    }
`;
const BurgerButton = styled.button`
    width: 40px;
    height: 39px;
    border-radius: 100%;
    background-color: var(--accent-button-color);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    outline: none;

    &:hover {
        background-color: var(--accent-color);
    }
`;

const StyledSvg = styled.svg`
    stroke: var(--main-color);
`;
const StyledSvgArrow = styled.svg`
    stroke: var(--main-color);
  transform: rotate(180deg);
  width: 10px;
  height: 10px;
  text-align: center;
  padding: 2px;

`;
const Box = styled.div`
display: flex;
gap:12px;
`;
const ButtonBox = styled.div`
display: none;
@media (min-width: 768px){
    display: flex;
    width: 140px;
}

`;
const Header = ({ setModalOpen, modalOpen, scrollToContact }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const scrollThreshold = 20;
            setIsScrolled(scrollTop > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const containerClass = isScrolled ? 'scrolled' : '';

    return (

        <Container className={containerClass}>
            <BoxHeader>
                <Logo />
                <Box>
                    <BurgerButton onClick={toggleModal}>
                        <StyledSvg width={16} height={16}>
                            <use href={`${sprite}#icon-menu`} />
                        </StyledSvg>
                    </BurgerButton>
                    <ButtonBox>
                        <Button onClick={scrollToContact}><Paragraph>Get in touch</Paragraph>
                            <Circle>
                                <StyledSvgArrow >
                                    <use href={`${sprite}#icon-arrow-top`} />
                                </StyledSvgArrow>
                            </Circle>
                        </Button>
                    </ButtonBox>
                </Box>
            </BoxHeader>
        </Container>
    );
};

export default Header;
