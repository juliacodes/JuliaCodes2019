import React from "react";
import styled from "styled-components/macro";
import comp from "./comp.png";
import coffee from "./coffee.png";
import ipad from "./ipad.png";
import sticker from "./sticker.png";
import Button from "../../components/button";

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const LeftGrid = styled.div`
  flex: 70%;
  flex-wrap: wrap;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "Left Left centertop Right Right" "Left Left centerbot Right Right";
  grid-gap: 20px;

  * {
    position: relative;
    height: 200px;
  }
`;

const GridLeft = styled.div`
  grid-area: Left;
  height: 420px;
  background-image: url(${comp});
  background-size: cover;
`;
const CenterTop = styled.div`
  grid-area: centertop;
  background-image: url(${sticker});
  background-size: cover;
`;
const CenterBot = styled.div`
  grid-area: centerbot;
  background-image: url(${coffee});
  background-size: cover;
`;
const GridRight = styled.div`
  grid-area: Right;
  height: 420px;
  background-image: url(${ipad});
  background-size: cover;
`;

const RightCTA = styled.div`
  flex: 30%;
  padding: 20px;
  align-items: center;
  display: flex;
`;

const CTAText = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  background-position: center center;

  h3 {
    max-width: 250px;
    margin: 30px 0;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }
`;

function GridRow(props) {
  return (
    <Row>
      <LeftGrid>
        <GridLeft></GridLeft>
        <CenterTop></CenterTop>
        <CenterBot></CenterBot>
        <GridRight></GridRight>
      </LeftGrid>
      <RightCTA>
        <CTAText>
          <h3>I'm a lot cooler on instagram</h3>
          <Button buttonText="See More" link="/" />
        </CTAText>
      </RightCTA>
    </Row>
  );
}

export default GridRow;
