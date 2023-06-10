import React from "react";
import styled from "styled-components";
import colors from '../../colors'

const Container = styled.div`
    transition: 0.2s;
    background-color: ${colors.primary};
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 280px;
    max-height: 230px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    border-radius: 25px;
    &:hover{
        transform: scale(1.2);
    }
    @media (max-width: 768px) {
    max-width: 200px;
    max-height: 250px;
  }
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 5px;
`

const Title = styled.h3``

const Description = styled.p``

const Skill = ({logo, title, description}) => {
    return (
        <Container>
            <Logo src={logo} alt="Skill logo" />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
};

export default Skill;
