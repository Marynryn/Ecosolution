import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styled, { css } from "styled-components";

const Button = styled(ScrollLink)`
  font-family: "Fira Sans";
  border: none;
  background-color: ${(props) =>
    props.$transparentButton ? "transparent" : "var(--accent-color)"};
  color: ${(props) =>
    props.$transparentButton ? "var(--white)" : "var(--main-color)"};
  border-radius: 500px;
  height:  ${(props) =>
    !props.$transparentButton && "39px"};
  padding:  ${(props) =>
    !props.$transparentButton && "0 16px"};
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 12px;
  font-size: ${(props) =>
    props.$transparentButton ? "24px" : "16px"};
  letter-spacing: -0.64px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  opacity: ${(props) => (props.$transparentButton ? "0.25" : "1")};
  
  ${(props) =>
    props.$isActive &&
    css`
      color: var(--accent-color);
      opacity: 1;
    `}

  &:hover,
  &:focus {
    background-color: ${(props) =>
    props.$transparentButton ? "transparent" : "var(--main-color)"};
    color: ${(props) =>
    props.$transparentButton ? "var(--white)" : "#97d28b"};
    opacity: 1;

    div {
      background-color: ${(props) =>
    props.$transparentButton ? "var(--white)" : "#97d28b"};
    }

    svg {
      transition: all 300ms ease-in-out;
      stroke: ${(props) =>
    props.$transparentButton ? "var(--white)" : " var(--main-color)"};
     
      opacity: 1;
    }
  }


`;

export const ScrollButton = ({
  children,
  colorButton,
  transparentButton,
  href,
  onClick,
  isActive,

  ...rest
}) => {


  return (
    <Button
      to={href}
      role="link"
      smooth={true}
      offset={-150}
      duration={500}
      onClick={onClick}
      tabIndex={0}

      $transparentButton={transparentButton}

      $isActive={isActive}
      {...rest}
    >
      {children}
    </Button>
  );
};
