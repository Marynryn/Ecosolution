import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import sprite from '../../svg/symbol-defs.svg';
import SocialIcons from 'components/SocialIcons/SocialIcons';

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
  opacity: 0.25;

  ${({ $isActive }) => $isActive && css`
    color: var(--accent-color);
    opacity: 1;
  `}

  &:hover {
    color: var(--white);
    opacity: 1;
    svg {
      stroke: var(--white);
      opacity: 1;
    }
  }
`;

const StyledSvg = styled.svg`
  stroke-width: 1px;
  stroke: var(--white);
  width: 16px;
  height: 16px;

  &:hover {
    stroke: var(--accent-color);
  }
  
  ${({ $isActive }) => $isActive && css`
    stroke: var(--accent-color);
  `}
`;

const ModalFooter = styled.footer`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 8px;
  margin-top: auto; 
  margin-bottom: 0;
`;

const ModalMenu = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      let activeId = '';
      for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          activeId = section.id;
          break;
        }
      }
      setActiveSection(activeId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navigation>
      <NavigationList>
        {navItems.map((el, index) => (
          <NavigationItem key={index}>
            <StyledLink href={`#${el.id}`} $isActive={activeSection === el.id}>
              {el.name}
              <StyledSvg $isActive={activeSection === el.id} width={16} height={16}>
                <use href={`${sprite}#icon-arrow-right-2`} width={16} height={16} />
              </StyledSvg>
            </StyledLink>
          </NavigationItem>
        ))}
      </NavigationList>
      <ModalFooter>
        <SocialIcons />
      </ModalFooter>
    </Navigation>
  );
};

export default ModalMenu;
