import React, { Component } from "react";
import styled from "styled-components/macro";
import Hamburger from "../../components/hamburger";
import Me from "./Me.png";
import comp from "./comp.png";
import coffee from "./coffee.png";
import ipad from "./ipad.png";
import sticker from "./sticker.png";

const Cursor = styled.div``;
const Mouse = styled.div``;

const Layout = styled.div`
  width: 100vw;
  height: 300vw;
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
      color: orange;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 55%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

const HeaderText = styled.div`
  padding: 0;
  width: 50%;
  min-width: 200px;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  background-position: center center;

  h1 {
    font-family: "Lato", sans-serif;
    font-size: 42px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }

  p {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    margin-bottom: 30px;
    color: #5e5e5e;
    letter-spacing: 0.03em;
  }
`;

const Right = styled.div`
  flex: 45%;
  height: auto;
  display: flex;
  position: relative;
`;

const RightImage = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 800px;
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  background-image: url(${Me});
`;

const RowSpacer = styled.div`
  width: 100%;
  padding: 80px 0;
`;

const LeftTriad = styled.div`
  flex: 30%;
`;

const CenterTriad = styled.div`
  flex: 30%;
`;
const RightTriad = styled.div`
  flex: 30%;
`;

const TimelineText = styled.div`
  h2 {
    max-width: 250px;
    margin: 30px auto;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }

  p {
    max-width: 250px;
    margin: 10px auto;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    margin-bottom: 30px;
    color: #5e5e5e;
    letter-spacing: 0.03em;
  }
`;

const Timeline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  position: relative;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: orange;
    position: absolute;
    top: -5px;
    left: calc(50% - 125px);
  }
`;

const LeftGrid = styled.div`
  flex: 70%;
  flex-wrap: wrap;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "Left Left centertop Right Right" "Left Left centerbot Right Right";
  grid-gap: 20px;

  * {
    position: relative;
    height: 200px;
  }
`;

const GridLeft = styled.div`
  grid-area: Left;
  height: 420px;
  background-image: url(${comp});
  background-size: cover;
`;
const CenterTop = styled.div`
  grid-area: centertop;
  background-image: url(${sticker});
  background-size: cover;
`;
const CenterBot = styled.div`
  grid-area: centerbot;
  background-image: url(${coffee});
  background-size: cover;
`;
const GridRight = styled.div`
  grid-area: Right;
  height: 420px;
  background-image: url(${ipad});
  background-size: cover;
`;

const RightCTA = styled.div`
  flex: 30%;
  padding: 20px;
  align-items: center;
  display: flex;
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
    margin: 30px auto;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
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
          <SquareHeader>
            <SquareTitle>
              <p>
                AB
                <br />
                OUT<span>.</span>
              </p>
            </SquareTitle>
          </SquareHeader>
          <Row>
            <Left>
              <HeaderText>
                <h1>
                  Building More Than <br />
                  Just Websites
                </h1>
                <p>
                  Duis sit amet mauris in tortor facilisis ornare eleifend vel
                  quam. Aliquam erat volutpat. Integer non elementum sem, vel
                  convallis erat.
                </p>
                <p>
                  Duis sit amet mauris in tortor facilisis ornare eleifend vel
                  quam. Aliquam erat volutpat. Integer non elementum sem, vel
                  convallis erat.
                </p>
                <p>
                  Duis sit amet mauris in tortor facilisis ornare eleifend vel
                  quam. Aliquam erat volutpat. Integer non elementum sem, vel
                  convallis erat.
                </p>
              </HeaderText>
            </Left>
            <Right>
              <RightImage />
            </Right>
          </Row>
          <RowSpacer />
          <Row>
            <LeftTriad>
              <Timeline />
              <TimelineText>
                <h2>
                  Growing <br />
                  Passion.
                </h2>
                <p>
                  Integer non elementum sem, vel convallis erat. Integer non
                  elementum sem, vel convallis erat.
                </p>
              </TimelineText>
            </LeftTriad>
            <CenterTriad>
              <Timeline />
              <TimelineText>
                <h2>
                  Expanding <br />
                  Knowledge.
                </h2>
                <p>
                  Integer non elementum sem, vel convallis erat. Integer non
                  elementum sem, vel convallis erat.
                </p>
              </TimelineText>
            </CenterTriad>
            <RightTriad>
              <Timeline />
              <TimelineText>
                <h2>
                  Gaining <br />
                  Experience.
                </h2>
                <p>
                  Integer non elementum sem, vel convallis erat. Integer non
                  elementum sem, vel convallis erat.
                </p>
              </TimelineText>
            </RightTriad>
          </Row>
          <RowSpacer />
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
              </CTAText>
            </RightCTA>
          </Row>
          <Hamburger />
        </Content>
      </Layout>
    );
  };
}

export default About;
