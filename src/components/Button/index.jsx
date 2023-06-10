import React from "react";
import styled from "styled-components";
import colors from "../../colors";

const StyledButton = styled.button`
  border: none;
  font-size: 20px;
  transition: 0.2s ease-in-out;
  padding: 20px 25px;
  border-radius: 5px;
  background-color: ${colors.secondary_variant};
  color: ${colors.primary};
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  @media (max-width : 1100px) {
    padding: 15px 20px;
  }
  @media (max-width : 425px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
};

export default Button;
