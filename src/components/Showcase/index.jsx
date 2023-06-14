import React from "react";
import styled from "styled-components";

import data from '../../data/creation.json';
import Title from '../Layout/title'
import Creation from '../Creation'
import Mockup from '../../assets/mockup.png'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 35px;
`

const CreationsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 50px 0;
    padding: 20px;
    max-width: 1500px;
`

const Reponsive = styled.img`
  position: absolute;
  top: -280px;
  width: 100%;
  max-width: 450px;
  @media (max-width: 768px) {
    max-width: 300px;
    top: -200px;
  }
`

const Showcase = () => {
    return (
        <Container id="creations">
            <Reponsive src={Mockup} loading="lazy" />
            <Title content="Mes créations"/>
            <CreationsWrapper>
                {data.map((creation) => (
                <Creation
                    key={creation.id}
                    picture={creation.picture}
                    title={creation.title}
                    subtitle={creation.subtitle}
                    slug={creation.title}
                    wip={creation.wip}
                />
                ))}
            </CreationsWrapper>
        </Container>
    );
};

export default Showcase;
