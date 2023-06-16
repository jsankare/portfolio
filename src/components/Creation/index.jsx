import React from "react";
import styled from "styled-components";
import colors from '../../colors';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`

const Image = styled.img`
    padding: 20px;
    width: 100%;
    height: 100%;
    width: 200px;
    height: 150px;
    object-fit: contain;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media (max-width: 500px) {
        width: 100px;
        height: 125px;
    }
`

const Title = styled.h3`
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Subtitle = styled.h4`
    margin: 0;
`

const SeeMore = styled(Link)`
    transition: 0.2s ease-in-out;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    background-color: ${colors.primary};
    &:hover {
        color: black;
        background-color: ${colors.secondary_variant};
        border-color: ${colors.secondary_variant};
    }
`

const SeeMoreImg = styled(Link)``

const Wip = styled.div`
    transition: 0.3s ease-in-out;
    position: absolute;
    top: 20px;
    left: 8px;
    width: 120px;
    height: 20px;
    padding: 5px;
    border-radius: 3px;
    transform: rotate(-12deg);
    background-color: ${colors.secondary_variant};
    color: ${colors.primary};
    font-size: 14px;
    &:hover {
        transform: rotate(-10deg);
    }
`;

const Creation = ({picture, title, subtitle, slug, wip}) => {
    return (
        <Container>
            {wip && <Wip>Work In Progress</Wip>}
            <SeeMoreImg to={`/closeup/${slug}`} ><Image src={picture} alt={subtitle} /></SeeMoreImg>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <SeeMore to={`/closeup/${slug}`} >En apprendre plus</SeeMore>
        </Container>
    );
};

export default Creation;
