import React, { Component } from "react";
import styled from "styled-components/macro";
import Hamburger from "../../components/hamburger";
import IntroRow from "../about/IntroRow";
import ProjectDiv from "../../components/ProjectDiv";
import Footer from "../../components/footer";

const Cursor = styled.div``;
const Mouse = styled.div``;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  overflow: hidden;

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
  background-color: #f6f6f6;
  overflow: scroll;
`;

const AboutLanding = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: 100%;
  flex-wrap: wrap;
`;

const SquareHeader = styled.div`
  width: 100%;
  max-height: 300px;
  height: 30%;
  position: relative;
`;

const SquareTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 30px 30px 5px;
  background-color: white;

  p {
    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 150px;
    line-height: 81.45%;
    letter-spacing: -0.045em;

    span {
      color: #b5f6ff;
    }
  }
`;

class Work extends Component {
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
            <SquareHeader>
              <SquareTitle>
                <p>
                  WO
                  <br />
                  RK<span>.</span>
                </p>
              </SquareTitle>
            </SquareHeader>
            <ProjectDiv />
          </AboutLanding>
          <Hamburger />
          <Footer />
        </Content>
      </Layout>
    );
  };
}

export default Work;
