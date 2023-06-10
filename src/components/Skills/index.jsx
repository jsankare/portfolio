import React from "react";
import styled from "styled-components";
import Skill from '../Skill'
import Title from '../../components/Layout/title'

let data = [
    {
        id: 'GLM1',
        title: 'HTML / CSS',
        description: `De la motivation, du HTML et du CSS et nos premières pages web ont pu voir le jour !`,
        image: '/images/htmlcss.png',
    },
    {
        id: 'MEG2',
        title: 'Javascript',
        description: `L'ajout du Javascript dans nos petits projets a permis d'élargir nos horizons, et de penser à aller acheter de l'aspirine`,
        image: '/images/js.png',
    },
    {
        id: '4BA4',
        title: 'Styled Components',
        description: `Ah .. Après le CSS classique, je me suis aventuré sur les modules css, mais ça c'est quelque chose de différent ! On y prend goût`,
        image: '/images/styled.png',
    },
    {
        id: 'V7K3',
        title: 'React',
        description: `Enfin ! Quelque chose de sympa ! C'est beau, bien rangé, et puis ça sent bon dis donc`,
        image: '/images/react.png',
    },
    {
        id: '47M5',
        title: 'Wordpress',
        description: `Tients tiens .. Un CMS ? Oui bon et bien il faut bien s'interesser un peu à tout aussi`,
        image: '/images/wordpress.png',
    },
    {
        id: 'BM86',
        title: 'Node',
        description: `C'est complètement différent de tout ce qui précède dis moi ? Complexe, mais fort interessant`,
        image: '/images/node.png',
    },
    {
        id: 'M6L7',
        title: 'Git',
        description: `THE outil, l'indispensable, le reconnu, l'immanquable, l'imprérieux !`,
        image: '/images/git.png',
    },
    {
        id: 'L23U',
        title: 'Mongo',
        description: `On met les infos dans les petites boites et on range tout ça bien propre`,
        image: '/images/mongoDB.png',
    },
    {
        id: '6ME8',
        title: 'SEO',
        description: `L'art et la manière d'être bien vu par le patron`,
        image: '/images/seo.png',
    },
    {
        id: '52M9',
        title: 'Bootstrap',
        description: `Et une bibliothèque de composants, une !`,
        image: '/images/bootstrap.png',
    },
    {
        id: '2M11',
        title: 'Figma',
        description: `Finalement, c'est quand même plus pratique que mon bloc-note et mon crayon de papier`,
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
