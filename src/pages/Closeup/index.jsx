import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../../data/creation.json";
import styled from "styled-components";
import colors from '../../colors'
import { Helmet } from "react-helmet";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 50px;
  background-color: ${colors.background};
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  @media (max-width: 768px){
    text-align: center;
    align-items: center;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media (max-width: 768px){
    text-align: center;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 50px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

const TagList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 10px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const UpsandDownsList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const UpsandDownsItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  @media (max-width: 768px) {
    min-height: 200px;
  }
`

const StyledCarousel = styled(Carousel)`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  max-width: 1000px;
  .control-dots .dot {
    background: ${colors.secondary_variant} !important;
  }
  .carousel .carousel-status {
    display: none;
  }
  .carousel.carousel-slider .control-arrow {
    border-radius: 5px;
    background: ${colors.secondary_variant};
    opacity: 1;
    height: 75px;
    @media (max-width: 678px){
      height: 50px;
    }
  }
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid white;
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid white;
  }
  .carousel.carousel-slider .control-arrow {
    top: 40%;
  }
`

const TagIcon = styled.img`
    transition: 0.2s;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
    color: ${colors.secondary};
    width: 100%;
    height: 100%;
    max-width: 35px;
    max-height: 35px;
    &:hover{
        transform: scale(1.1);
        }
`;

const Here = styled.a`
    text-decoration: none;
    color: ${colors.secondary_variant};
`

const Upsides = styled.div``

const UpsidesTitle = styled.h4``

const Downsides = styled.div``

const DownsidesTitle = styled.h4``

const UpsAndDownsDesktop = styled.section`
    @media (max-width: 768px) {
        display: none;
    }
`

const UpsAndDownsMobile = styled.section`
    display: none;
    text-align: left;
    @media (max-width: 768px) {
        display: inline;
    }
`

const Closeup = () => {

    const { slug } = useParams();
    const project = data.find((creation) => creation.title.replace(/\s+/g, '-').toLowerCase() === slug);

    if (!project) {
        return <Navigate to="/404"/>
    }

    return (
        <Container>
        <Helmet>
            <title>{project.title}</title>
            <meta name="description" content={project.description} />
            <meta name="title" content={project.title} />
        </Helmet>
        <StyledCarousel showThumbs={false}>
            {project.figures.map((figure, index) => (
            <div key={index}>
                <SliderImage src={figure} alt={`Figure ${index}`} />
            </div>
            ))}
        </StyledCarousel>
        <Wrapper>
            <Left>
                <Title>{project.title}</Title>
                <TagList>
                {project.tags.map((tag) => (
                    <TagIcon key={tag.url} src={tag.url} title={tag.name} />
                ))}
                </TagList>
                <UpsAndDownsDesktop>
                    {project.upsides && project.upsides.length > 0 && (
                        <Upsides>
                            <UpsidesTitle>Les points positifs :</UpsidesTitle>
                            <UpsandDownsList>
                                {project.upsides.map((upside, index) => (
                                    <UpsandDownsItem key={index}>{upside}</UpsandDownsItem>
                                ))}
                            </UpsandDownsList>
                        </Upsides>
                    )}
                    {project.downsides && project.downsides.length > 0 && (
                        <Downsides>
                            <DownsidesTitle>Problèmes surmontés :</DownsidesTitle>
                            <UpsandDownsList>
                                {project.downsides.map((downside, index) => (
                                    <UpsandDownsItem key={index}>{downside}</UpsandDownsItem>
                                ))}
                            </UpsandDownsList>
                        </Downsides>
                    )}
                </UpsAndDownsDesktop>
            </Left>
            <Right>
                <Description>{project.description}</Description>
                {project.link && (
                    <Description>
                    Vous pouvez voir le projet <Here href={project.link} target="blank">en cliquant ici.</Here>
                    </Description>
                )}
                <UpsAndDownsMobile>
                {project.upsides && project.upsides.length > 0 && (
                        <Upsides>
                            <UpsidesTitle>Les points positifs :</UpsidesTitle>
                            <UpsandDownsList>
                                {project.upsides.map((upside, index) => (
                                    <UpsandDownsItem key={index}>{upside}</UpsandDownsItem>
                                ))}
                            </UpsandDownsList>
                        </Upsides>
                    )}
                    {project.downsides && project.downsides.length > 0 && (
                        <Downsides>
                            <DownsidesTitle>Problèmes surmontés :</DownsidesTitle>
                            <UpsandDownsList>
                                {project.downsides.map((downside, index) => (
                                    <UpsandDownsItem key={index}>{downside}</UpsandDownsItem>
                                ))}
                            </UpsandDownsList>
                        </Downsides>
                    )}
                </UpsAndDownsMobile>
            </Right>
        </Wrapper>
        </Container>
    );
};

export default Closeup;
