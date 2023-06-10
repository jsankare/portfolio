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
        title:"De qui on parle ?",
        description:'Lorem ipsum dolor sit amet, consectetur elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
        name:"Abdoulaye Wane",
        position:"Mentor Openclassroom"
    },
    {
        title:"Gratuit c'est pas cher",
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
        name:"Johanna",
        position:"Graines de Meaux"
    },
    {
        title:"Une plaie ce mec",
        description:'Lorem ipsum dolor sit amet, consectetur elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
        name:"Vincent",
        position:"Developpeur Senior"
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
