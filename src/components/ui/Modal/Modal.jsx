import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import sprite from "svg/symbol-defs.svg"

import content from 'data/common.json'
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--backdrop-color);
  display: flex;
  justify-content: end;
backdrop-filter: blur(2px);
  align-items: flex-start;
  z-index: 10; 
`;

const ModalContent = styled.div`
  background: var(--menu-color);
  position: relative;
  backdrop-filter: blur(12.5px);
  border-radius: 25px;
  padding: 24px;
margin: 0 0 0 auto;
 width: 272px;
 height: calc(100% - 120px);
  
  overflow-y: auto;
 
  @media (min-width: 768px) {
 width: 317px;

  }
  ::before{
    content: "";
    position: absolute;
    top: 56px;
    left:24px;
    background-color:var(--white) ;
    width:calc(100% - 48px);
    height: 1px;
 }
`;
const Box = styled.div`
display: flex;
align-items: right;
margin: 36px 20px;
 width: 100%;
 height: 100%;
  overflow-y: auto;
  position: relative;
   @media (min-width: 480px){
width: 440px;
margin: 36px auto;
    }
  @media (min-width: 768px) {

 margin-right: 30px;
  }
  @media (min-width: 1280px){
    width: 1240px;
    margin: 24px auto;
  }
`;
const CloseButton = styled.button`
margin-bottom: 8px;
cursor: pointer;
  border: none;
  background-color: transparent ;
  display: inline-flex;
  align-items: center;
  padding:0;
 margin-left: -5px;
 &:hover, &:focus{
    p{color:var(--accent-color);}
    svg{
        stroke: var(--accent-color);
    }
 }

`;
const StyledSvg = styled.svg`
    stroke: var(--white);
margin-top: 3px;
 &:hover{
     stroke: var(--accent-color);
 }
`;
const WordClose = styled.p`
     color:var(--white);
      margin: 0 ;
      font-size: 20px;
font-weight: 400;

`;
const Modal = ({ onClose, children }) => {

    const handleCloseModal = useCallback(() => {
        onClose(false);
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                handleCloseModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseModal]);
    return (
        <ModalBackdrop onClick={handleBackdropClick}>
            <Box onClick={handleBackdropClick}>
                <ModalContent >
                    <CloseButton onClick={handleCloseModal} type='button'>
                        <StyledSvg width={20} height={20} aria-label={content.burgerMenu.ariaLabelClose}>
                            <use href={`${sprite}#icon-x`} />
                        </StyledSvg>
                        <WordClose>{content.burgerMenu.button}</WordClose>
                    </CloseButton>

                    {children}
                </ModalContent>
            </Box>
        </ModalBackdrop>
    );
};

export default Modal;
