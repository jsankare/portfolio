import React from "react";
import styled from "styled-components";
import Title from "../Layout/title"
import Testimonial from '../Testimonial'

const data = [
    {
        title:"Rapidité & Professionnalisme",
        description:`Je me suis lancée récemment en auto entrepreneur et Jordan a contribué à la bonne réalisation de mon projet. Il a été très réactif, a su comprendre et analyser les besoins nécessaires à la création du site internet et me l'a créé.`,
        name:"Marilou",
        position:"Marilou"
    },
    {
        title:`Très motivé, très déterminé`,
        description:`J'ai été le mentor de Jordan durant son parcours de développeur Web chez Openclassrooms.
        Tout au long de la formation, il a fait preuve d'une grande autonomie et d'une excellente
        capacité à s'adapter aux nouveaux défis.
         J'ai vu un étudiant très motivé, très déterminé et qui avait déjà de très bonnes bases en
         développement web.
        En résumé, je recommande fortement Jordan Sankare en tant que développeur web.
        Il possède toutes les compétences techniques, la motivation et les qualités personnelles
        nécessaires pour réussir dans ce domaine.`,
        name:"Abdoulaye Wane",
        position:"Mentor Openclassrooms"
    },
    {
        title:"Professionnel & sérieux",
        description:`Jordan a su me conseiller du début à la fin pour la création de mon site internet. Il a été fort de proposition et dans le même temps à l'écoute de mes besoins. Très réactif, il a su s'adapter à toutes les situations. Le résultat est Super, Merci !`,
        name:"Johanna",
        position:"Graines de Meaux"
    },
    {
        title:`Soif d'apprentissage`,
        description:`Jordan est un jeune développeur frontend motivé par les choses bien faites, les besoins du client et une envie de comprendre les retours qu'on peut lui fournir`,
        name:"Vincent",
        position:"Développeur Senior"
    }
]

const Container = styled.section`
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
`

const TestimonialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`

const Testimonials = () => {
    return (
        <Container>
            <Title content="Leurs avis" />
            <TestimonialsWrapper>
                {data.map((testimonial, index) => (
                    <Testimonial
                        key={index}
                        title={testimonial.title}
                        description={testimonial.description}
                        name={testimonial.name}
                        position={testimonial.position}
                    />
                ))}
            </TestimonialsWrapper>
        </Container>
    );
};

export default Testimonials;
