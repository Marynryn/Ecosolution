import React from "react";

import clsx from "clsx";

import { Link as ScrollLink } from "react-scroll";



export const ScrollButton = ({
  children,

  href,
  onClick,
}) => {
  return (
    <ScrollLink
      to={href}
      href=""
      smooth={true}
      offset={0}
      duration={500}
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  );
};
