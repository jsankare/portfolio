import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: ${colors.primary};
  box-shadow: 0 0 5px black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width : 425px) {
    gap: 30px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width : 768px) {
    flex-direction: row;
    gap: 25px;
  }
  @media (max-width : 425px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
  }
`

const StyledLink = styled(Link)`
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-bottom: 8px;
  &:hover{
    transform: scale(1.05);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactWrapper>
        <StyledLink to="mailto:jordan.sankare@gmail.com" >jordan.sankare@gmail.com</StyledLink>
        <StyledLink to="tel:0665258153" >06.58.14.25.88</StyledLink>
      </ContactWrapper>
      <LinksWrapper>
        <StyledLink to="/#infos">Infos</StyledLink>
        <StyledLink to="/#skills">Compétences</StyledLink>
        <StyledLink to="/#creations">Réalisations</StyledLink>
        <StyledLink to="/testimonial">Avis</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </LinksWrapper>
      <Socials>
        <StyledLink to="https://www.linkedin.com/in/jordan-sankare/" target="_blank"><Icon icon={faLinkedin} className="fa-brands" /></StyledLink>
        <StyledLink to="https://github.com/jsankare" target="_blank"><Icon icon={faGithubSquare} className="fa-brands" /></StyledLink>
      </Socials>
    </FooterWrapper>
  );
};

export default Footer;
