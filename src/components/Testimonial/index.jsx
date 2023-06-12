import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import colors from '../../colors';

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    max-height: 1000px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-bottom: 5px;
    @media (max-width: 500px) {
        max-width: 250px;
    }
`;

const Title = styled.h3`
    font-size: 22px;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 18px;
    }
`;

const TruncatedDescription = styled.p`
    font-weight: bold;
    width: 100%;
    max-width: 300px;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    @media (max-width: 768px) {
        font-size: 14px;
        -webkit-line-clamp: 3;
    }
`;

const FullDescription = styled.p`
    font-weight: bold;
    width: 100%;
    max-width: 300px;
    text-align: center;
    font-size: 16px;
    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

const ExpandButton = styled.button`
    background: none;
    border: none;
    color: ${colors.secondary_variant};
    text-decoration: underline;
    cursor: pointer;
`;

const Name = styled.h4`
    margin: 0;
`;

const Position = styled.p`
     margin: 0;
`;

const Icon = styled(FontAwesomeIcon)`
     font-size: 30px;
`;

const Testimonial = ({ title, description, name, position }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
        <Container id="testimonial">
            <Icon icon={faQuoteLeft} className="fa-brands" />
            <Title>{title}</Title>
            {expanded ? (
                <FullDescription>{description}</FullDescription>
                ) : (
                <TruncatedDescription>{description}</TruncatedDescription>
                )}
                {description.length > 100 && (
                <ExpandButton onClick={toggleExpand}>
                    {expanded ? "Lire moins" : "Lire plus"}
                </ExpandButton>
            )}
            <Name>- {name}</Name>
            <Position>{position}</Position>
        </Container>
    );
};

export default Testimonial;
