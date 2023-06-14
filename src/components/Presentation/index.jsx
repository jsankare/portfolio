import React from "react";
import styled from "styled-components";
import profile from "../../assets/profile2.jpg"
import Title from "../Layout/title";

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1250px;
    height: 100%;
    min-height: 500px;
    @media (max-width: 1100px) {
        padding: 0 20px;
        gap: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
`

const Description = styled.p`
    width: 100%;
    max-width: 600px;
    font-size: 18px;
    @media (max-width: 768px) {
        text-align: center;
    }
`

const Picture = styled.img`
    width: 100%;
    height: 100%;
    max-width: 400px;
    border-radius: 15px;
    margin-bottom: 10px;
`

const Presentation = () => {
    return (
        <Wrapper id="infos">
            <Block>
                <Title content='A propos de moi'/>
                    <Description>
                        Bienvenue à vous sur mon portfolio en ligne. Après avoir travaillé dans divers milieux, notamment le fret ainsi que les collèges & lycées, j'ai 
                        décidé de me prendre en main et d'effectuer une reconversion professionelle, au cours de laquelle j'ai décroché un diplôme de développeur web de niveau 5 (Bac +2). 
                        <br />
                        <br />
                        Passionné depuis le lycée (coucou les programmes sur la TI-83), j'ai toujours plus ou moins eu un oeil sur l'informatique et ses technologies. Aidé par un
                        proche développeur lui même et armé de ma motivation, j'ai pu accomplir des missions en même temps que mon diplôme pour toujours renforcer mes connaissances.
                    </Description>
            </Block>
        <Picture src={profile} loading="lazy" />
        </Wrapper>
    );
};

export default Presentation;
