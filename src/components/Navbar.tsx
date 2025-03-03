import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2a2d34;
  padding: 15px 0;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-bottom: 2px solid #fff; 
  display: flex;
  justify-content: space-between;
  align-items: center;

   @media (max-width: 768px) {
    display: none; 
  }
`;

const NavbarLogo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0 20px;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px; 
`;

const NavbarItem = styled.li`
  position: relative;
`;

const NavbarLink = styled.a`
  color:  #a889fd;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    color: #fff;
    background-color:   #a889fd;
    transform: translateY(-3px); 
  }

  &.active {
    color: #fff;
    background-color: #a889fd;
    transform: translateY(-3px); 
  }
`;

const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        AB
      </NavbarLogo>
      <NavbarList>
        <NavbarItem>
          <NavbarLink
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            Sobre Mim
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Habilidades
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projetos
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            href="#certificates"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('certificates');
            }}
          >
            Certificados
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contato
          </NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
