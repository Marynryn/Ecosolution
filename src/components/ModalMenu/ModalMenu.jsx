import React from 'react';
import styled from 'styled-components';
import sprite from '../../svg/symbol-defs.svg';

const Navigation = styled.nav`
  margin-top: 16px;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 50px); 
`;

const navItems = [
    { name: 'Main', id: 'main' },
    { name: 'About', id: 'about' },
    { name: 'Cases', id: 'cases' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact Us', id: 'contact' },
];

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin-top: 8px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.96px;
  
  &:hover {
    color: var(--accent-color);
       svg {
      stroke: var(--accent-color);
    }
  }
`;

const StyledSvg = styled.svg`
 stroke-width: 1px;
stroke:var(--white); 

  width: 16px;
  height: 16px;
    &:hover {
    stroke: var(--accent-color);
  }
`;
const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  fill: var(--white);
  transition: fill 0.3s;

  &:hover {
    fill: var(--accent-color);
  }
`;
const ModalFooter = styled.footer`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 8px;
margin-top: auto; 
  margin-bottom: 0;
`;
const StyledIcon = styled.svg`
fill:transparent;
stroke:var(--white);
 stroke-width: 2;
    &:hover {
    stroke: var(--accent-color);
  } 
`;

const ModalMenu = () => {
    return (
        <Navigation>
            <NavigationList>
                {navItems.map((el, index) => (
                    <NavigationItem key={index}>
                        <StyledLink href={`#${el.id}`}>
                            {el.name}
                            <StyledSvg width={16} height={16}>
                                <use href={`${sprite}#icon-arrow-right-2`} width={16} height={16} />
                            </StyledSvg>
                        </StyledLink>
                    </NavigationItem>
                ))}
            </NavigationList>
            <ModalFooter>
                <SocialIcon href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                    <StyledIcon width={24} height={24}>
                        <use href={`${sprite}#icon-facebook`} />
                    </StyledIcon>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                    <StyledIcon width={24} height={24}>
                        <use href={`${sprite}#icon-instagram`} />
                    </StyledIcon>
                </SocialIcon>

            </ModalFooter>
        </Navigation>
    );
};

export default ModalMenu;
