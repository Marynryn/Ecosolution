import Logo from 'components/Logo/Logo';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sprite from "../../svg/symbol-defs.svg";

const Container = styled.header`
    display: flex;
    background-color: ${props => props.isScrolled ? 'var(--white)' : 'var(--background)'};
    justify-content: space-between;
    padding: 36px  20px;
    position: fixed;
    z-index: 5;   
    top: 0;
    left: 0;
    width: calc(100% - 40px);

    @media (min-width: 768px) {
        padding: 36px 30px 40px 30px;
        width: calc(100% - 60px);
    }

    @media (min-width: 1280px) {
        padding: 24px 100px 20px 100px;
        width: calc(100% - 200px);
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
    stroke: var(--black);
`;

const Header = ({ setModalOpen, modalOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const scrollThreshold = 20; // Adjust as needed
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

    return (
        <Container isScrolled={isScrolled}>
            <Logo />
            <BurgerButton onClick={toggleModal}>
                <StyledSvg width={16} height={16}>
                    <use href={`${sprite}#icon-menu`} />
                </StyledSvg>
            </BurgerButton>
        </Container>
    );
};

export default Header;
