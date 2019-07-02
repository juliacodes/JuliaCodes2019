import React, { Component } from "react";
import styled from "styled-components/macro";
import Hamburger from "../../components/hamburger";
import DescriptionHome from "../../components/descriptionhome";
const Cursor = styled.div``;
const Mouse = styled.div``;

const GridContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 60px;
  grid-template-rows: 60px 1fr 1fr 1fr 1fr 60px;
  grid-template-areas: ". . .  .  .  .  .  .  . " ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." "Footer Footer Footer Footer Footer Footer Footer Footer Footer";

  .cursor {
    height: 50px;
    width: 50px;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    transform: translateX(-50%) translateY(-50%);
  }

  .Mouse .cursor:nth-child(2) {
    border: 1px solid gray;
    z-index: 100002;
  }
  .Mouse .cursor:nth-child(1) {
    height: 20px;
    width: 20px;
    background-color: black;
    opacity: 0.8;
    z-index: 100001;
  }
`;

const Content = styled.div`
  height: 100%;
  display: grid;
  grid-area: Content;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight";
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Triangle = styled.div`
  animation: slideFromRight 1s forwards;
  grid-area: Triangle;
  position: relative;
  height: 100%;
  z-index: 2;
  @keyframes slideFromRight {
    0% {
      transform: translate(2000px);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
`;

const JULIA = styled.div`
  grid-area: Triangle;
  position: absolute;
  margin-top: 25vh;
  right: 0;
  z-index: 5;
  opacity: 0;
  font-size: 220px;
  line-height: 86.95%;
  letter-spacing: -0.03em;
  pointer-events: none;
  font-weight: 900;
  animation: slideFromLeft 1s forwards;
  animation-delay: 0.5s;

  @keyframes slideFromLeft {
    0% {
      transform: translate(-1000px);
      opacity: 0;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }
`;

const BlueTriangle = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  border-bottom: 100vh solid #ecf3f4;
  border-left: 400px solid transparent;
`;

const BlueBackground = styled.div`
  height: 100%;
  background-color: #ecf3f4;
  position: relative;
  z-index: 1;
  display: grid;
  grid-area: ContentRight;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . . . . . . . Ham" ". . . . . . . . . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . . . . . . . . ." ". . . . . . . . . .";
  animation: slideFromRight 1s forwards;
`;

class Landing extends Component {
  state = {
    xMain: 0,
    yMain: 0,
    xTrailing: 0,
    yTrailing: 0
  };

  handleMouseMove = e => {
    const { clientX, clientY } = e;
    this.setState(
      {
        xMain: clientX,
        yMain: clientY
      },
      () => {
        setTimeout(() => {
          this.setState({
            xTrailing: clientX,
            yTrailing: clientY
          });
        }, 100);
      }
    );
  };

  render = () => {
    const { xMain, yMain, xTrailing, yTrailing } = this.state;
    return (
      <GridContainer onMouseMove={e => this.handleMouseMove(e)}>
        <Mouse className="Mouse">
          <Cursor
            className="cursor"
            style={{
              left: xMain,
              top: yMain
            }}
          />
          <Cursor
            className="cursor"
            style={{
              left: xTrailing,
              top: yTrailing
            }}
          />
        </Mouse>
        <Content>
          <Triangle>
            <BlueTriangle />
            <JULIA>
              JU <br />
              LIA
            </JULIA>
          </Triangle>
          <BlueBackground>
            <DescriptionHome />
            <Hamburger />
          </BlueBackground>
        </Content>
      </GridContainer>
    );
  };
}

export default Landing;
