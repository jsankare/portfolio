import React from "react";
import styled from "styled-components";
import Skill from '../Skill'
import Title from '../../components/Layout/title'

let data = [
    {
        id: 'GLM1',
        title: 'HTML / CSS',
        take: `Le début de tout dev. Un peu de HTML et de CSS, et nos premières pages statiques ambiance années 90' voient le jour`,
        description: `HTML & CSS sont les bases pour débuter dans le développement web. C'est pratique, simple, et ça permet de créer de petits projets sympatiques.`,
        image: '/images/htmlcss.png',
    },
    {
        id: 'MEG2',
        title: 'Javascript',
        take: `L'apprentissage de Javascript permet de rajouter une dimension dynamique et intéractive à nos projets, et de se rendre compte qu'en fait on ne connait pas grand chose`,
        description: `JavaScript est un langage puissant pour le développement web. Il ajoute interactivité et dynamisme aux sites en manipulant le HTML, gérant les événements utilisateur, effectuant des requêtes serveur et modifiant l'apparence des éléments de la page. Interprété côté client, il offre flexibilité et fonctionnalités pour créer des applications web modernes et interactives `,
        image: '/images/js.png',
    },
    {
        id: '4BA4',
        title: 'Styled Components',
        take: `Un peu complexe au premier abord, cela devient vite intuitif et facile d'utilisation une fois la logique bien entrée en tête`,
        description: `Styled Components est une bibliothèque JavaScript pour styliser les composants web. Elle permet de définir des styles CSS de manière dynamique, directement dans le code JavaScript. Cela facilite la réutilisabilité des composants et la gestion des styles dans les applications. Avec Styled Components, nous pouvons créer des interfaces esthétiques et maintenables`,
        image: '/images/styled.png',
    },
    {
        id: 'V7K3',
        title: 'React',
        take: `Enfin dans la cour des grands ! Avec React, -presque- tout est possible. Il faut penser à beaucoup de choses mais le résultat est très satisfaisant`,
        description: `React est une bibliothèque JavaScript pour créer des interfaces utilisateur interactives et réactives. Elle facilite la construction de composants réutilisables et la gestion de l'état de l'application ainsi que des performances optimisées et permet des mises à jour dynamiques des éléments de l'interface`,
        image: '/images/react.png',
    },
    {
        id: '47M5',
        title: 'Wordpress',
        take: `C'est complètement différent de ce que j'ai pu faire depuis mes débuts en développement, intéressant et terrifiant de savoir que l'on peut créer des sites entiers sans une ligne de code`,
        description: `WordPress est un système de gestion de contenu (CMS) open source. Il permet de créer et gérer des sites web facilement. Avec une interface conviviale, la personnalisation est possible grâce aux thèmes et plugins. WordPress offre la possibilité de créer des sites web dynamiques et personnalisés sans compétences avancées en programmation`,
        image: '/images/wordpress.png',
    },
    {
        id: 'BM86',
        title: 'Node',
        take: `Le premier pas dans le monde du back-end. C'est à la fois très similaire et extrêmement différent du front-end. Une dualité quasiment philosophique entre familiarité et exploration`,
        description: `Node.js est un environnement d'exécution JavaScript côté serveur. Il permet de développer des applications web performantes et évolutives. Node.js utilise un modèle asynchrone et non bloquant, ce qui le rend idéal pour les applications gourmandes en temps réel. Avec sa vaste bibliothèque de modules, Node.js offre une flexibilité et une efficacité accrues dans le développement d'applications back-end `,
        image: '/images/node.png',
    },
    {
        id: 'M6L7',
        title: 'Git',
        take: `Git, l'élixir précieux du développement, orchestre harmonieux de collaborations, préservant l'histoire et la puissance du code avec sagesse`,
        description: `Git est un système de contrôle de version décentralisé, largement utilisé dans le développement de logiciels, qui permet de gérer et de suivre les modifications apportées aux fichiers, de collaborer efficacement avec d'autres développeurs et de revenir facilement à des versions antérieures en cas de besoin`,
        image: '/images/git.png',
    },
    {
        id: 'L23U',
        title: 'Mongo',
        take: `Après un petit moment sans toucher à de la base de donnée, ça fait du bien d'en refaire, même si c'est du NoSQL`,
        description: `MongoDB est une base de données NoSQL orientée documents, qui offre une flexibilité et une évolutivité élevées, ainsi qu'une gestion facile des données non structurées ou semi-structurées, en permettant le stockage et la récupération de données sous un format de type JSON`,
        image: '/images/mongoDB.png',
    },
    {
        id: 'K32N',
        title: 'Tests Unitaires',
        take: `La joie d'écrire un code qui fonctionne n'est rien comparée à celle des tests unitaires qui fonctionnent`,
        description: `Test unitaire`,
        image: '/images/unittest.png',
    },
    {
        id: '6ME8',
        title: 'SEO',
        take: `L'art et la manière d'être bien vu par le patron`,
        description: `Le SEO désigne l'ensemble des techniques et pratiques visant à améliorer la visibilité et le classement d'un site web dans les résultats des moteurs de recherche, afin d'attirer un trafic organique de qualité et d'augmenter sa visibilité en ligne`,
        image: '/images/seo.png',
    },
    {
        id: '52M9',
        title: 'Bootstrap',
        take: `Bootstrap, la clé de l'élégance et de la réactivité web, offrant des composants prêts à l'emploi pour un design moderne et cohérent`,
        description: `Bootstrap est un framework front-end open source qui facilite la création de sites web réactifs et esthétiquement attrayants. Il fournit une collection de composants prédéfinis et d'outils CSS/JavaScript pour accélérer le processus de développement et garantir la cohérence de l'interface utilisateur`,
        image: '/images/bootstrap.png',
    },
    {
        id: '2M11',
        title: 'Figma',
        take: `Finalement, c'est quand même plus pratique que mon bloc-note et mon crayon de papier`,
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
                    take={skill.take}
                    description={skill.description}
                />
                ))}
            </SkillsWrapper>
        </Container>
    );
};

export default Skills;
