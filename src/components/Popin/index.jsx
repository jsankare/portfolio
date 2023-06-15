import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLightbulb } from "@fortawesome/free-solid-svg-icons";

let data = [
    {
        id: "XY6J2",
        funFact: "Le 1er site internet a été créé en 1991 par Tim Berners-Lee. Il voulait inventer un moyen pour les scientifiques de communiquer les uns avec les autres."
    },
    {
        id: "8Z4K9",
        funFact: "Le CSS a été mis en place pour la 1ère fois en 1994, mais ne permettait que de modifier les mises en pages."
    },
    {
        id: "P3F7N",
        funFact: "Le temps d'attention moyen est passé de 12 à 8 secondes (Source : Digital Information World)."
    },
    {
        id: "M9D2R",
        funFact: "Une entreprise sur quatre n'a pas de site internet (Qu'attendez-vous ?!)."
    },
    {
        id: "Q5V8W",
        funFact: "En moyenne, une personne regarde son smartphone 150 fois par jour."
    },
    {
        id: "T7G4X",
        funFact: "Les visiteurs d'un site mettent environ 0.5 secondes pour former une opinion dessus."
    },
    {
        id: "K2B6C",
        funFact: "Les avis des clients sont perçus comme aussi fiables qu'une recommandation personnelle."
    },
    {
        id: "R9E3S",
        funFact: "Le visiteur moyen est prêt à attendre trois secondes pour le chargement d'une page web."
    },
    {
        id: "H6J8L",
        funFact: "Google préfère les sites web adaptatifs (responsive)."
    },
    {
        id: "N5A2F",
        funFact: "Tous les navigateurs rendent différemment les sites web."
    },
    {
        id: "W1Z4O",
        funFact: `Un site ou contenu qui date de plus d'un an peut être considéré comme "vieux".`
    },
    {
        id: "Y9Q2E",
        funFact: "Un bon référencement naturel (SEO) peut augmenter considérablement la visibilité d'un site web."
    },
    {
        id: "U2L5V",
        funFact: "L'utilisation de polices de caractères attrayantes peut améliorer l'expérience utilisateur d'un site web."
    },
    {
        id: "S4R6D",
        funFact: "Les médias sociaux jouent un rôle important dans la promotion d'un site web."
    },
    {
        id: "A1B2C",
        funFact: "Le premier nom de domaine enregistré était symbolics.com en 1985."
      },
      {
        id: "D3E4F",
        funFact: "En 2021, il y avait plus de 4.9 milliards d'utilisateurs d'Internet dans le monde."
      },
      {
        id: "G5H6I",
        funFact: "Le langage de programmation le plus populaire en 2021 était JavaScript."
      },
      {
        id: "J7K8L",
        funFact: "Le premier navigateur web graphique grand public était Mosaic, lancé en 1993."
      },
      {
        id: "M9N1O",
        funFact: "Environ 90% des données mondiales ont été créées au cours des deux dernières années."
      },
      {
        id: "P2Q3R",
        funFact: "Le protocole HTTP a été inventé par Tim Berners-Lee en 1989."
      },
      {
        id: "S4T5U",
        funFact: "La première version de WordPress a été lancée en 2003 par Matt Mullenweg et Mike Little."
      },
      {
        id: "V6W7X",
        funFact: "En 2020, le temps moyen passé par jour sur les réseaux sociaux était d'environ 2 heures et 25 minutes."
      },
      {
        id: "Y8Z9A",
        funFact: "Le terme 'bug' pour désigner un problème informatique a été popularisé par Grace Hopper en 1947."
      },
      {
        id: "B1C2D",
        funFact: "Le premier smartphone, le IBM Simon, a été lancé en 1994 et pesait près d'un kilogramme."
      },
      {
        id: "E3F4G",
        funFact: "Le premier moteur de recherche Web, appelé Archie, a été créé en 1990."
      },
      {
        id: "H5I6J",
        funFact: "En 2022, le trafic Internet mondial a atteint environ 397 exaoctets par mois."
      },
      {
        id: "K7L8M",
        funFact: "Environ 40% de la population mondiale a accès à Internet."
      },
      {
        id: "N9O1P",
        funFact: "Les premiers emojis ont été créés au Japon en 1999 par Shigetaka Kurita."
      },
      {
        id: "Q2R3S",
        funFact: "Environ 60% du trafic Internet est généré par des robots ou des logiciels automatisés."
      },
      {
        id: "T4U5V",
        funFact: "En 2020, il y avait plus de 1.8 milliard de sites web actifs dans le monde."
      },
      {
        id: "W6X7Y",
        funFact: "La première version de HTML a été publiée en 1993 par Tim Berners-Lee."
      },
      {
        id: "Z8A9B",
        funFact: "Environ 500 heures de vidéos sont téléchargées sur YouTube chaque minute."
      },
      {
        id: "C1D2E",
        funFact: "Environ 70% des cyberattaques ciblent les petites entreprises."
      },
      {
        id: "F3G4H",
        funFact: "Le terme 'bug' pour désigner un problème informatique a été utilisé pour la première fois par Grace Hopper en 1947."
      },
      {
        id: "E3F4G",
        funFact: "React a été développé par Facebook et a été initialement déployé en 2013."
      },
      {
        id: "K7L8M",
        funFact: "Git est un système de contrôle de version distribué créé par Linus Torvalds en 2005."
      },
      {
        id: "N9O1P",
        funFact: "GitHub, une plateforme d'hébergement de code, a été lancée en 2008."
      },
      {
        id: "D4E5V",
        funFact: "Les développeurs passent en moyenne 6 à 8 heures par jour à écrire du code."
      },
      {
        id: "Z6A7B",
        funFact: "Le syndrome de l'imposteur est courant parmi les développeurs, les faisant douter de leurs compétences malgré leur expertise."
      },
      {
        id: "F8G9H",
        funFact: "La résolution de problèmes est une compétence essentielle pour les développeurs, qui passent souvent des heures à déboguer des erreurs."
      },
      {
        id: "M1N2O",
        funFact: "Les développeurs ont tendance à être des apprenants autodidactes, se mettant constamment à jour sur les nouvelles technologies et les meilleures pratiques."
      }
    ];


const Container = styled.div`
    position: fixed;
    bottom: 70px;
    right: 10px;
    @media (max-width: 768px) {
        bottom: 10px;
    }
`

const TriggerIcon = styled(FontAwesomeIcon)`
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: ${colors.secondary_variant};
    color: ${colors.background};
    padding: 10px;
    border-radius: 50%;
`

const Close = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 20px;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: ${colors.primary_variant};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
`;


const HeadWrapper = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: ${colors.secondary_variant};
    border-radius: 10px 10px 0 0;
    justify-content: space-around;
    color: white;
`

const ContentWrapper = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    width: 100%;
    cursor: pointer;
    flex-direction: column;
`

const Intel = styled.p`
    padding: 10px;
    margin: 0;
`

const Heading = styled.h3`
    margin: 0;
`

const HowToDesktop = styled.p `
  font-size: 12px;
  display: block;
  text-align: center;
  margin: 0;
  margin-bottom: 4px;
  @media (max-width:678px) {
    display: none;
  }
`

const HowToMobile = styled.p `
  display: none;
  font-size: 12px;
  text-align: center;
  margin: 0;
  margin-bottom: 4px;
  @media (max-width:678px) {
    display: block;
  }
`

const Popin = () => {
    const [isPopinOpen, setIsPopinOpen] = useState(false);
    const [isTriggerIconVisible, setIsTriggerIconVisible] = useState(true);
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    const togglePopin = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentFactIndex(randomIndex);
        setIsPopinOpen(!isPopinOpen);
        setIsTriggerIconVisible(false);
    }

    const closePopin = () => {
        setIsPopinOpen(false);
        setIsTriggerIconVisible(true);
    }

    const handleClick = () => {
      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentFactIndex(randomIndex);
    }

    useEffect(() => {
        // Update the fun fact every 5 seconds
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * data.length);
            setCurrentFactIndex(randomIndex);
        }, 20000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const currentFact = data[currentFactIndex];

    return (
        <Container>
            {isTriggerIconVisible && <TriggerIcon icon={faLightbulb} onClick={togglePopin} />}
            <Wrapper isOpen={isPopinOpen} >
                <HeadWrapper isOpen={isPopinOpen}>
                    <FontAwesomeIcon icon={faLightbulb} />
                    <Heading>Le saviez-vous ?</Heading>
                    <Close icon={faXmark} style={{color: "#f21f07"}} onClick={closePopin} />
                </HeadWrapper>
                <ContentWrapper isOpen={isPopinOpen} onClick={handleClick} >
                    <Intel>{currentFact.funFact}</Intel>
                    <HowToDesktop>Clickez pour changer !</HowToDesktop>
                    <HowToMobile>Tappez pour changer !</HowToMobile>
                </ContentWrapper>
            </Wrapper>
        </Container>
    );
};

export default Popin;
