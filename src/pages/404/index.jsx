import React from "react";
import styled from "styled-components";
import colors from '../../colors'
import { Helmet } from "react-helmet";

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        flex-direction: column;
    }
    @media (max-width: 500px) {
        height: 100vh;
    }
`

const ContentContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Picture = styled.img`
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    @media (max-width: 768px) {
        max-width: 200px;
        width: 200px;
    }
`

const Title = styled.h1 `
    color: ${colors.secondary_variant};
    font-size: 100px;
    text-align: center;
    margin: 0;
`

const Subtitle = styled.a`
    font-size: 20px;
    text-align: center;
    color: ${colors.secondary_variant};
    text-decoration: none;
`

const Missdirection = () => {
    return (
        <Container>
            <Helmet>
                <title>JSankare - 404</title>
                <meta name="description" content="Oups ! Vous avez atteint une page introuvable. Retournez à mon portfolio en ligne pour découvrir mes projets, compétences et expériences en tant que développeur web frontend." />
            </Helmet>
            <Picture src="/images/astronaut.png" />
                <ContentContainer>
                    <Title>404</Title>
                    <Subtitle href="/" >Retour sur la page d'accueil</Subtitle>
                </ContentContainer>
            <Picture src="/images/pc_astronaut.png" />
        </Container>
    );
};

export default Missdirection;
