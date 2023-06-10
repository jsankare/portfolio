import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    max-height: 400px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h3`
    font-size: 22px;
`

const Description = styled.p`
    font-weight: bold;
    width: 100%;
    max-width: 300px;
    text-align: center;
`

const Name = styled.h4`
    margin: 0;
`

const Position = styled.p`
    margin: 0;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

const Testimonial = ({ title, description, name, position }) => {
    return (
        <Container id="testimonial"><Icon icon={faQuoteLeft} className="fa-brands" />
            <Title>{title}</Title>
            <Description>"{description}"</Description>
            <Name>- {name}</Name>
            <Position>{position}</Position>
        </Container>
    );
};

export default Testimonial;
