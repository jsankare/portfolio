import React from "react";
import styled from "styled-components";
import colors from '../../colors'

const Container = styled.div`
    transition: 0.2s;
    background-color: ${colors.primary};
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    max-width: 280px;
    min-height: 400px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    border-radius: 25px;
    &:hover{
        transform: scale(1.2);
    }
    @media (max-width: 768px) {
    max-width: 200px;
    height: 420px;
  }
  @media (max-width: 500px) {
    max-width: 400px;
    max-height: 200px;
    min-height: 150px;
    flex-direction: row;
    padding: 10px;
    gap: 5px;
    height: auto;
    justify-content: space-evenly;
    &:hover{
        transform: scale(1.05);
    }
  }
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 5px;
    @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`

const Title = styled.h3`
    @media (max-width: 500px) {
    display: none;
  }
`

const Description = styled.p`
    @media (max-width: 768px) {
      text-align: left;
    }
    @media (max-width: 500px) {
    margin: 0;
  }
`

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
