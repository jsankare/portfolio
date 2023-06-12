import React from "react";
import styled from "styled-components";
import Skill from '../Skill'
import Title from '../../components/Layout/title'

let data = [
    {
        id: 'GLM1',
        title: 'HTML / CSS',
        description: `HTML & CSS sont les bases pour débuter dans le développement web. C'est pratique, simple, et ça permet de créer de petits projets sympatiques.`,
        image: '/images/htmlcss.png',
    },
    {
        id: 'MEG2',
        title: 'Javascript',
        description: `L'ajout du Javascript au HTML & CSS permet de d'implémenter des fonctionnalités dynamiques et intéractives à nos projets`,
        image: '/images/js.png',
    },
    {
        id: '4BA4',
        title: 'Styled Components',
        description: `La bibliothèque Styled Components permet de créer des composants réutilisables avec des styles CSS déclarés directement dans le code Javascript`,
        image: '/images/styled.png',
    },
    {
        id: 'V7K3',
        title: 'React',
        description: `React est une bibliothèque Javascript utilisée pour construire des interfaces utilisateur intéractives et réactives, en facilitant la gestion de l'état des composants et la mise à jour efficace de l'interface`,
        image: '/images/react.png',
    },
    {
        id: '47M5',
        title: 'Wordpress',
        description: `Wordpress est un CMS qui permet de créer et gérer facilement des sites, sans nécessiter de connaissances approfondies en programmation`,
        image: '/images/wordpress.png',
    },
    {
        id: 'BM86',
        title: 'Node',
        description: `Node.js est un environnement d'exécution JavaScript côté serveur, basé sur le moteur V8 de Google Chrome, qui permet de développer des applications web évolutives et hautement performantes, ainsi que des outils en ligne de commande`,
        image: '/images/node.png',
    },
    {
        id: 'M6L7',
        title: 'Git',
        description: `Git est un système de contrôle de version décentralisé, largement utilisé dans le développement de logiciels, qui permet de gérer et de suivre les modifications apportées aux fichiers, de collaborer efficacement avec d'autres développeurs et de revenir facilement à des versions antérieures en cas de besoin`,
        image: '/images/git.png',
    },
    {
        id: 'L23U',
        title: 'Mongo',
        description: `MongoDB est une base de données NoSQL orientée documents, qui offre une flexibilité et une évolutivité élevées, ainsi qu'une gestion facile des données non structurées ou semi-structurées, en permettant le stockage et la récupération de données sous un format de type JSON`,
        image: '/images/mongoDB.png',
    },
    {
        id: '6ME8',
        title: 'SEO',
        description: `Le SEO désigne l'ensemble des techniques et pratiques visant à améliorer la visibilité et le classement d'un site web dans les résultats des moteurs de recherche, afin d'attirer un trafic organique de qualité et d'augmenter sa visibilité en ligne`,
        image: '/images/seo.png',
    },
    {
        id: '52M9',
        title: 'Bootstrap',
        description: `Bootstrap est un framework front-end open source qui facilite la création de sites web réactifs et esthétiquement attrayants. Il fournit une collection de composants prédéfinis et d'outils CSS/JavaScript pour accélérer le processus de développement et garantir la cohérence de l'interface utilisateur`,
        image: '/images/bootstrap.png',
    },
    {
        id: '2M11',
        title: 'Figma',
        description: `Figma est un outil de conception d'interface utilisateur (UI) et de prototypage basé sur le cloud, qui permet aux équipes de collaborer en temps réel sur la création et la conception d'interfaces interactives pour des applications web et mobiles, offrant ainsi une approche efficace et centralisée du design,`,
        image: '/images/figma.jpg',
    }
];

const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px 45px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 50px 0;
    padding: 20px;
    max-width: 1500px;
    @media (max-width: 500px) {
    gap: 20px;
  }
`

const Skills = () => {
    return (
        <Container id="skills" >
            <Title content='Mes compétences' />
            <SkillsWrapper>
                {data.map((skill) => (
                <Skill
                    key={skill.id}
                    logo={skill.image}
                    title={skill.title}
                    description={skill.description}
                />
                ))}
            </SkillsWrapper>
        </Container>
    );
};

export default Skills;
