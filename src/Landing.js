import React, { Component } from "react";
import styled from "styled-components";
import Hamburger from "./components/Hamburger";
import ScrollNotice from "./components/ScrollNotice";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 60px;
`;

const Blue = styled.div`
  background-color: #ecf3f4;
  height: 100%;
  animation: slideFromRight 1s forwards;

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

  & h1 {
    position: relative;
    font-size: 200px;
    line-height: 91.45%;
    padding: 250px 0 0 300px;
    animation: slideFromLeft 1s forwards;
    animation-delay: 0.5s;
    pointer-events: none;
    opacity: 0;
  }

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
  width: 600px;
  height: 0;
  border-top: 1100px solid white;
  border-right: 700px solid transparent;
  animation: ShiftEdge 1s forwards;

  @keyframes ShiftEdge {
    0% {
      border-top: 2400px solid white;
      border-right: 300px solid transparent;
    }
    100% {
      border-top: 1100px solid white;
      border-right: 700px solid transparent;
    }
  }
`;

class Landing extends Component {
  render() {
    return (
      <div>
        <HomeContainer>
          <Blue>
            <Hamburger />
            <Cutout />
            <h1>
              JU <br />
              LIA
            </h1>
            <ScrollNotice />
          </Blue>
        </HomeContainer>
      </div>
    );
  }
}

export default Landing;
