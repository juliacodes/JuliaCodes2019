import React, { Component } from "react";
import styled from "styled-components/macro";
import Hamburger from "../../components/hamburger";
import DescriptionHome from "../../components/descriptionhome";
const Cursor = styled.div``;
const Mouse = styled.div``;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
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
  min-height: calc(100% -30px);
  max-width: 2000px;
  background-color: #ecf3f4;
  flex: 1 0 auto;
  flex-wrap: wrap;
  position: relative;
  overflow: scroll;
`;

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 100%;

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
          <Container>
            <Hamburger />
            <Left>
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
          </Container>
          <Container>
            <div>Hello</div>
          </Container>
        </Content>
      </Layout>
    );
  };
}

export default Landing;
