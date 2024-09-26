import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import sprite from '../../svg/symbol-defs.svg';
import SocialIcons from 'components/ui/SocialIcons/SocialIcons';
import content from 'data/common.json';
import { ScrollButton } from 'components/ui/ScrollButton/ScrollButton';

const Navigation = styled.nav`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 50px);
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin-top: 8px;
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

const ModalMenu = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('');

  const updateActiveSection = () => {
    const sections = content.burgerMenu.navItems.map(item => document.getElementById(item.id)).filter(Boolean);
    let activeId = '';

    for (let section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        activeId = section.id;
        break;
      }
    }

    setActiveSection(activeId);
  };

  useEffect(() => {

    window.addEventListener('scroll', updateActiveSection);


    updateActiveSection();
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClick = () => {
    onClose()
    document.body.style.overflow = 'auto'
  };

  return (
    <Navigation>
      <NavigationList>
        {content.burgerMenu.navItems.map((el, index) => (
          <NavigationItem key={index}>
            <ScrollButton
              href={el.id}
              transparentButton={true}
              $isActive={activeSection === el.id}
              onClick={handleClick}
            >
              {el.name}
              <StyledSvg $isActive={activeSection === el.id} width={16} height={16} aria-label={content.burgerMenu.ariaLabel}>
                <use href={`${sprite}#icon-arrow-right-2`} width={16} height={16} />
              </StyledSvg>
            </ScrollButton>
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
