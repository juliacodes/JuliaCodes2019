import React from "react";
import { Container } from "../../components/container";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import styled from "styled-components/macro";

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
`;

const Image = styled(Container)`
  width: 40%;
  height: 500px;
  background-color: blue;
`;

const RightColumn = styled(Container)`
  width: 40%;
  background-color: pink;
`;

function TwoColumnDiv() {
  return (
    <FlexContainer>
      <Image></Image>
      <RightColumn>
        <Heading>HelloWorld</Heading>
        <Paragraph>Hows it going</Paragraph>
      </RightColumn>
    </FlexContainer>
  );
}

export default TwoColumnDiv;
