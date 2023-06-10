import React from "react";
import styled from "styled-components";
import colors from '../../colors'

const Container = styled.section``

const ContentContainer = styled.div``

const Background = styled.img`
    width: 100%;
    height: 800px;
    position: relative;
`

const Title = styled.h1 `
    position: absolute;
    color: ${colors.primary};
    top: 25%;
    left: 50%;
    font-size: 80px;
`

const Subtitle = styled.h3`
    position: absolute;
    color: ${colors.primary};
    top: 75%;
    left: 50%;
`

const Missdirection = () => {
    return (
        <Container>
            <Background src="https://cdn.dribbble.com/users/1285451/screenshots/6483584/dribbble_space.jpg?compress=1&resize=800x600&vertical=top" />
            <ContentContainer>
                <Title>404</Title>
                <Subtitle>Vous vous êtes perdu ?</Subtitle>
            </ContentContainer>
        </Container>
    );
};

export default Missdirection;
