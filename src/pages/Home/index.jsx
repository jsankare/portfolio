import { Helmet } from "react-helmet";

import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import Skills from '../../components/Skills';
import Divider from '../../components/Divider'
import Showcase from '../../components/Showcase';
import Presentation from '../../components/Presentation';
import Testimonials from '../../components/Testimonials';

import colors from '../../colors'

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
`

const Center = styled.section`
  display: flex;
  justify-content: center;
`

const App = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>JSankare</title>
        <meta name="description" content="Portfolio en ligne de Jordan Sankare. Découvrez mes compétences en tant que développeur web frontend, mes projets, compétences et expériences pour créer des sites et expériences numériques exceptionnelles." />
      </Helmet>
      <Hero />
        <Center>
          <Presentation/>
        </Center>
        <Divider image='/images/laptop.jpg' header={'Fiable, créatif, organisé'} subheader={'Capable de répondre à tous vos besoins'} color={colors.primary} />
        <Skills/>
        <Divider image='/images/devices.jpg' header={'Compatible Mobile, Tablettes & P.C'} subheader={'Développement Web Reponsive'} color={colors.primary} />
        <Showcase/>
        <Testimonials/>
    </Wrapper>
  );
};

export default App;
