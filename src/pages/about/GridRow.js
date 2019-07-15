import React from "react";
import styled from "styled-components/macro";
import comp from "./comp.png";
import { breakpoints } from "../../Media";
import coffee from "./coffee.png";
import ipad from "./ipad.png";
import sticker from "./sticker.png";
import Button from "../../components/Button";

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const LeftGrid = styled.div`
  flex: 100%;
  flex-wrap: wrap;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "Left Left centertop Right Right" "Left Left centerbot Right Right";
  grid-gap: 20px;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 70%;
  }
  * {
    position: relative;
    height: 200px;
  }
`;

const GridLeft = styled.div`
  grid-area: Left;
  height: 320px;
  background-image: url(${comp});
  background-size: cover;
  @media (min-width: ${breakpoints.mobileMax}) {
    height: 420px;
  }
`;
const CenterTop = styled.div`
  grid-area: centertop;
  background-image: url(${sticker});
  background-size: cover;
  height: 150px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: unset;
  }
`;
const CenterBot = styled.div`
  grid-area: centerbot;
  background-image: url(${coffee});
  background-size: cover;
  height: 150px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: unset;
  }
`;
const GridRight = styled.div`
  grid-area: Right;
  height: 320px;
  background-image: url(${ipad});
  background-size: cover;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 420px;
  }
`;

const RightCTA = styled.div`
  flex: 100%;
  padding: 20px;
  align-items: center;
  display: flex;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 30%;
  }
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
          <Button>See More</Button>
        </CTAText>
      </RightCTA>
    </Row>
  );
}

export default GridRow;
