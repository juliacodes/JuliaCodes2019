import React, { Component } from "react";
import styled from "styled-components";
import Hamburger from "./components/Hamburger";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 60px;
`;

const Blue = styled.div`
  background-color: #ecf3f4;
  height: 100%;

  & h1 {
    position: relative;
    font-size: 200px;
    line-height: 91.45%;
    padding: 250px 0 0 300px;
  }
`;
const Cutout = styled.div`
  position: absolute;
  width: 600px;
  height: 0;
  border-top: 1100px solid white;
  border-right: 700px solid transparent;
`;

class Landing extends Component {
  render() {
    return (
      <div>
        <HomeContainer>
          <Blue>
            <Hamburger></Hamburger>
            <Cutout />
            <h1>
              JU <br />
              LIA
            </h1>
          </Blue>
        </HomeContainer>
      </div>
    );
  }
}

export default Landing;
