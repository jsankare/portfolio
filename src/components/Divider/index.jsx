import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";

const StyledParallax = styled(Parallax)`
  width: 100%;
  height: 400px;
`;

const Heading = styled.h3`
  font-size: 40px;
  margin: 0;
`;

const Text = styled.p`
  margin: 25px 0 0 0;
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  align-items: center;
  @media (max-width : 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Divider = ({ image, header, subheader, color }) => {
  const bgImageAlt = "Development image";
  const bgImageStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transform: "translate(-50%, -30%)",
  };

  return (
    <StyledParallax
      blur={1}
      bgImage={image}
      bgImageAlt={bgImageAlt}
      bgImageStyle={bgImageStyle}
      strength={1200}
    >
      <Wrapper color={color}>
        <Text>{header}</Text>
        <Heading>{subheader}</Heading>
      </Wrapper>
    </StyledParallax>
  );
};

export default Divider;
