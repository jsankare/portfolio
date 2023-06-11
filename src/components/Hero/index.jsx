import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import background from '../../assets/background.jpg'

const HeroWrapper = styled.section`
  position: relative;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10%;
  @media (max-width : 768px) {
    position: inline;
    align-items: center;
  }
`

const Title = styled.h1 `
  font-size: 60px;
  font-weight: 800;
  color: ${colors.primary};
  margin: 10px 0;
  @media (max-width : 768px) {
    font-size: 40px;
  }
  @media (max-width : 320px) {
    font-size: 28px;
  }
`

const SubTitle = styled.h2 `
  font-size: 35px;
  font-weight: 500;
  color: ${colors.primary};
  margin: 10px 0;
  @media (max-width : 768px) {
    font-size: 20px;
  }
  @media (max-width : 320px) {
    font-size: 16px;
  }
`


const Hero = () => {
  return (
    <HeroWrapper>
      <BackgroundImage />
      <ContentWrapper>
        <Title>Jordan Sankare</Title>
        <SubTitle>Developpeur Web</SubTitle>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
