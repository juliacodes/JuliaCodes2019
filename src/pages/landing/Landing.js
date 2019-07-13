import React, { Component } from "react";
import styled from "styled-components/macro";
import Hamburger from "../../components/hamburger";
import TwoColumnDiv from "../../components/TwoColumnDiv";
import { Container } from "../../components/container";
import Button from "../../components/Button";
import DescriptionHome from "../../components/descriptionhome";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
const Cursor = styled.div``;
const Mouse = styled.div``;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  max-width: 2000px;
  margin: 0 auto;

  @media (min-width: 900px) {
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
  margin: 30px;

  display: flex;
  width: calc(100% - 90px);
  flex: 1 0 auto;
  flex-wrap: wrap;
  position: relative;
  overflow: scroll;
`;

const HomeLanding = styled.div`
  display: flex;
  flex: 1 0 auto;
  background-color: #ecf3f4;
  height: 100%;
  flex-wrap: wrap;
`;

const WhiteTriangle = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 40%;
  height: 0;
  border-top: 100vh solid white;
  border-right: 30vw solid transparent;
`;

const WhiteTriangleAlt = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: 0;
  width: 40%;
  height: 0;
  border-bottom: 100vh solid white;
  border-left: 40vw solid transparent;
`;

const Left = styled.div`
  flex: 100%;
  z-index: 1;
  @media (min-width: 900px) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Right = styled.div`
  flex: 100%;

  @media (min-width: 900px) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const JULIA = styled.div`
  background-color: white;
  padding: 20px;
  width: 350px;
  z-index: 99;
  p {
    margin: 0 auto;
    font-weight: 900;
    font-size: 200px;
    line-height: 86.95%;
    letter-spacing: -0.03em;
  }

  @media (min-width: 900px) {
    background-color: unset;
    padding: 0;
    width: 100%;
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    background-position: center center;
  }
`;

const GrayContainer = styled(Container)`
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);
  margin: 0;
`;

const SolidGrayContainer = styled(Container)`
  background-color: #f2f2f2;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 10%;

  p {
    max-width: 400px;
  }
`;

const ProjectDescription = styled(Container)`
  width: 40%;
  height: auto;
  vertical-align: middle;
`;

const ProjectDiv = styled(Container)`
  width: 30%;
  height: 800px;
`;

const Project = styled(Container)`
  width: 400px;
  height: 33%;
  padding: 0;
  margin: 0 20px 20px 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d3d3d3;
  /* background-image: url("https://s3-alpha-sig.figma.com/img/0f29/4ab3/d756d27ec4094f94acb28e642e628864?Expires=1563753600&Signature=JYk6w9M-Jj4Er-y8IuSG-FEiZUTuj9M~QP7b4wMho1fT3~ElNEBmAMNTo-N1jvOAye~RuJDBXVSqvqxv06B0ffJIIQPA3IcZ~sLtgipNokLkvWR4XhTOsc-mcbzrsExUkK~ERKBUiA0a4uO80vJpWIyygk~GyQLkamxvS4cp36rXe1K97nG6LzhMSgcFG86PQTr6EGk6ZqllqdIoqkOHdDPKVnMIiVcZO7XCOGOGU8SpVnP8FR7ZCxC-6KERGw2x4naITmG3uI5Is9EI1Js4Q~SHDSjepUJr9bnyNgJyhPHbAdTV-FI74dvWBAVsTS2KYPCeBbr9szlP~dFcXoNKNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"); */

  :nth-child(1) {
    transform: translateX(0px);
  }

  :nth-child(2) {
    transform: translateX(-100px);
  }

  :nth-child(3) {
    transform: translateX(-200px);
  }
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
          <HomeLanding>
            <Hamburger />
            <Left>
              <WhiteTriangle />
              <JULIA>
                <p>
                  JU <br />
                  LIA
                </p>
              </JULIA>
            </Left>
            <Right>
              <DescriptionHome />
            </Right>
          </HomeLanding>
          <GrayContainer>
            <TwoColumnDiv />
          </GrayContainer>
          <SolidGrayContainer>
            <WhiteTriangleAlt />
            <ProjectDescription>
              <Heading>My Projects</Heading>
              <Paragraph>
                I spend lots of my free exploring new technologies and picking
                up new development projects. <br />
                <br />
                Take a look at what I've been working on recently.
              </Paragraph>
              <Button>See My Work</Button>
            </ProjectDescription>
            <ProjectDiv>
              <Project />
              <Project />
              <Project />
            </ProjectDiv>
          </SolidGrayContainer>
        </Content>
      </Layout>
    );
  };
}

export default Landing;
