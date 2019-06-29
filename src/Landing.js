import React, { Component } from "react";
import styled from "styled-components";
import Hamburger from "./components/Hamburger";
import ScrollNotice from "./components/ScrollNotice";

const GridContainer = styled.div`
  .cursor {
    position: fixed;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
  }

  .Mouse .cursor:nth-child(2) {
    border: 1px solid gray;
    z-index: 100002;
  }
  .Mouse .cursor:nth-child(1) {
    background-color: black;
    opacity: 0.8;
    z-index: 100001;
    height: 20px;
    width: 20px;
  }

  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 60px;
  grid-template-rows: 60px 1fr 1fr 1fr 1fr 60px;
  grid-template-areas: ". . . . . . . . ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". . . . . . . . .";
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground" ". . . BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground" ". . SCROLL BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground" ". . SCROLL BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground BlueBackground";
  grid-area: Content;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const BlueBackground = styled.div`
  animation: slideFromRight 1s forwards;
  background-color: #ecf3f4;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . . . . . . . . . . . . Hamburger" "JULIA JULIA JULIA JULIA . . . . . . . . . . ." "JULIA JULIA JULIA JULIA . . . . . . . . . . ." ". . . . . . . . . . . . . . .";
  grid-area: BlueBackground;

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
  grid-area: JULIA;
  line-height: 92%;
  position: relative;
  margin-left: 30%;
  font-size: 200px;
  animation: slideFromLeft 1s forwards;
  animation-delay: 0.5s;
  pointer-events: none;
  opacity: 0;
  font-weight: 900;

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

const Cutout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  border-top: 1000px solid white;
  border-right: 500px solid transparent;
  animation: ShiftEdge 1s forwards;

  @keyframes ShiftEdge {
    0% {
      border-top: 2400px solid white;
      border-right: 300px solid transparent;
    }
    100% {
      border-top: 1000px solid white;
      border-right: 500px solid transparent;
    }
  }
`;

const Cursor = styled.div``;
const Mouse = styled.div``;

class Landing extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     scrolled: false
  //   };
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", () => {
  //     const isTop = window.scrollY < 10;
  //     if (isTop !== true) {
  //       this.setState({ scrolled: true });
  //     } else {
  //       this.setState({ scrolled: false });
  //     }
  //   });
  // }

  state = {
    xMain: 0,
    yMain: 0,
    xTrailing: 0,
    yTrailing: 0
  };

  handleMouseMove = e => {
    // Using pageX and pageY will cause glitching when you scroll the window down
    // because it measures the distance from the top left rendered corner, not
    // top left visible corner
    const { clientX, clientY } = e;

    // we set the main circle coordinates as soon as the mouse is moved
    this.setState(
      {
        xMain: clientX,
        yMain: clientY
      },
      () => {
        // this callback is invoked after the first setState finishes
        //
        // here we schedule saving the trailing coordinates in state 100ms
        // after the main coordinates have been set to simulate the trailing
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
          <BlueBackground>
            <Cutout />
            <Hamburger />
            <JULIA>
              JU <br />
              LIA
            </JULIA>
          </BlueBackground>
          <ScrollNotice />
        </Content>
      </GridContainer>
    );
  };
}

export default Landing;
