import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import sprite from "../../svg/symbol-defs.svg"
import Line from 'components/Line/Line';

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
  backdrop-filter: blur(12.5px);
  border-radius: 25px;
  padding: 24px;
margin: 36px 20px;
 width: 272px;
 height: calc(100% - 120px);
  overflow-y: auto;
  position: relative;
  @media (min-width: 768px) {
 width: 317px;
 margin-right: 100px;
  }
`;

const CloseButton = styled.button`
margin-bottom: 8px;
  border: none;
  background-color: transparent ;
  display: flex;
  align-items: center;
  padding:0;
 margin-left: -5px;
 &:hover{
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
            <ModalContent >
                <CloseButton onClick={handleCloseModal}>
                    <StyledSvg width={20} height={20} >
                        <use href={`${sprite}#icon-x`} />
                    </StyledSvg>
                    <WordClose>close</WordClose>
                </CloseButton>
                <Line color={"var(--white)"} />
                {children}
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;
