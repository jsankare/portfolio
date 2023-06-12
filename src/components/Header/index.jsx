import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import Button from '../Button';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: ${colors.primary};
  height: 100%;
  max-height: 50px;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media (max-width: 1100px) {
    padding: 18px 40px;
  }
  @media (max-width : 425px) {
    padding: 10px 15px;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 100px;
  font-size: 22px;
  @media (max-width: 1150px) {
    gap: 30px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
  }
  &:active{
    color: ${colors.primary_variant};
  }
  @media (max-width: 768px) {
    &:hover{
      color: ${colors.secondary_variant};
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Icon = styled.img`
  width: 100%;
  max-width: 40px;
`

const Menu = styled.div`
  display: none;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 100%;
  right: 5px;
  background-color: ${colors.primary};
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <div>
        <StyledLink to="/">
          <Logo src='/images/test.png' alt="Logo" />
        </StyledLink>
      </div>
      <LinksWrapper>
        <StyledLink to="/#infos">Infos</StyledLink>
        <StyledLink to="/#skills">Compétences</StyledLink>
        <StyledLink to="/#creations">Réalisations</StyledLink>
        <StyledLink to="/#testimonial">Avis</StyledLink>
      </LinksWrapper>
      <MenuIcon onClick={toggleMenu}>
        <Icon src='/images/menu.png' />
      </MenuIcon>
      <Menu isOpen={isMenuOpen}>
        <StyledLink to="/#infos">Infos</StyledLink>
        <StyledLink to="/#skills">Compétences</StyledLink>
        <StyledLink to="/#creations">Réalisations</StyledLink>
        <StyledLink to="/#testimonial">Avis</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Menu>
      <ButtonWrapper>
      <StyledLink to="/contact">
        <Button content="Me contacter" />
      </StyledLink>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
