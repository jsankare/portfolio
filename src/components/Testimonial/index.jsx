import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    max-height: 400px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-bottom: 5px;
    @media (max-width: 500px){
        max-width: 250px;
    }
`

const Title = styled.h3`
    font-size: 22px;
    text-align: center;
    @media (max-width: 500px){
        font-size: 18px;
    }
`

const Description = styled.p`
    font-weight: bold;
    width: 100%;
    max-width: 300px;
    text-align: center;
    font-size: 16px;
    @media (max-width: 500px){
        font-size: 14px;
    }
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
