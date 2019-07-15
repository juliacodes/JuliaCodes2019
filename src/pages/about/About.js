import React, { Component } from "react";
import styled from "styled-components/macro";
import Hamburger from "../../components/hamburger";
import IntroRow from "./IntroRow";
import TimelineRow from "./TimelineRow";
import { breakpoints } from "../../Media";
import GridRow from "./GridRow";
import Square from "../../components/square";
import SkillsGrid from "./SkillsGrid";
import Footer from "../../components/footer";

const Cursor = styled.div``;
const Mouse = styled.div``;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 100vw;
    height: 100vh;
  }

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
  margin: 10px;
  display: flex;
  width: calc(100% - 90px);
  flex: 1 0 auto;
  flex-wrap: wrap;
  position: relative;
  background-color: #f6f6f6;
  overflow: scroll;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 30px;
  }
`;

const AboutLanding = styled.div`
  height: 120vh;
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    flex-wrap: wrap;
  }
`;

const RowSpacer = styled.div`
  width: 100%;
  padding: 80px 0;
`;

class About extends Component {
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
      <Layout onMouseMove={e => this.handleMouseMove(e)}>
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
          <AboutLanding>
            <Square />
            <IntroRow />
          </AboutLanding>
          <RowSpacer />
          <TimelineRow />
          <RowSpacer />
          <GridRow />
          <RowSpacer />
          <SkillsGrid />
          <Hamburger />
          <Footer />
        </Content>
      </Layout>
    );
  };
}

export default About;
