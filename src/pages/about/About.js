import React, { Component } from "react";
import styled from "styled-components/macro";
import Hamburger from "../../components/hamburger";
import IntroRow from "./IntroRow";
import TimelineRow from "./TimelineRow";
import GridRow from "./GridRow";
import Square from "../../components/square";

const Cursor = styled.div``;
const Mouse = styled.div``;

const Layout = styled.div`
  width: 100vw;
  padding: 60px;

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
  max-width: 2000px;
  margin: 0 auto;
  background-color: #f7f7f7;
  height: 100%;
  position: relative;
`;

const RowSpacer = styled.div`
  width: 100%;
  padding: 80px 0;
`;

const DarkGrid = styled.div`
  width: 100%;
  display: flex;
  background-color: #1c202e;
`;

const LeftSkills = styled.div`
  flex: 40%;
  padding: 40px;
`;
const RightSkills = styled.div`
  flex: 30%;
  padding: 40px;
`;

const SkillDescription = styled.div`
  width: 100%;
  color: white;
  padding: 30px 20%;

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

  p {
    color: #dcdcdc;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 156.19%;
    margin-bottom: 10px;
    letter-spacing: 0.03em;
  }
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
          <Square />
          <RowSpacer />
          <RowSpacer />
          <IntroRow />
          <RowSpacer />
          <TimelineRow />
          <RowSpacer />
          <GridRow />
          <RowSpacer />
          <DarkGrid>
            <LeftSkills>
              <SkillDescription>
                <h3>My Skills.</h3>
                <p>
                  I also make a mean grilled cheese sandwich, but I doubt that’s
                  what you’re here to figure out.
                </p>
              </SkillDescription>
            </LeftSkills>
            <RightSkills>
              <SkillDescription>
                <h3>Web Development</h3>
                <p> Advanced HTML & CSS </p>
                <p> Javascript </p>
                <p>React </p>
                <p>React Native</p>
                <p> PHP & SQL</p>
              </SkillDescription>
            </RightSkills>
            <RightSkills>
              <SkillDescription>
                <h3>Design</h3>
                <p>Ilustrator</p>
                <p> Photoshop </p>
                <p>Figma</p>
                <p> Adobe XD </p>
                <p> Maya 3D</p>
              </SkillDescription>
            </RightSkills>
          </DarkGrid>
          <Hamburger />
        </Content>
      </Layout>
    );
  };
}

export default About;
