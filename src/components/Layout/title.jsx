import React from "react";
import styled from "styled-components";

const Holder = styled.h2 `
    text-align: center;
    font-size: 38px;
    @media (max-width : 768px) {
    font-size: 34px;
}
`

const Title = ({content, id}) => {
    return (
        <>
        <Holder id={id}>{content}</Holder>
        </>
    );
};

export default Title;
