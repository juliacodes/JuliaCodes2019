import React, { Component } from "react";
import styled from "styled-components";
import Hamburger from "./components/Hamburger";
import ScrollNotice from "./components/ScrollNotice";
import insta from "./components/icons/insta.png";
import medium from "./components/icons/medium.png";
import github from "./components/icons/github.png";

const GridContainer = styled.div`
  .cursor {
    position: fixed;
    height: 50px;
    width: 50px;
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
  grid-template-areas: ". . .  .  .  .  .  .  . " ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." "Footer Footer Footer Footer Footer Footer Footer Footer Footer";
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight";
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . . . . . . . Ham" ". . . . . . . . . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . . . . . . . . ." ". . . . . . . . . .";
  grid-area: ContentRight;

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
  position: relative;
  margin-left: 11vw;
  margin-top: 25vh;
  font-size: 220px;
  line-height: 86.95%;
  letter-spacing: -0.03em;
  animation: slideFromLeft 1s forwards;
  animation-delay: 0.5s;
  pointer-events: none;
  opacity: 0;
  z-index: 99;
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

// const Cutout = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 0;
//   border-top: 1000px solid white;
//   border-right: 500px solid transparent;
//   animation: ShiftEdge 1s forwards;

//   @keyframes ShiftEdge {
//     0% {
//       border-top: 2400px solid white;
//       border-right: 300px solid transparent;
//     }
//     100% {
//       border-top: 1000px solid white;
//       border-right: 500px solid transparent;
//     }
//   }
// `;

const Triangle = styled.div`
  animation: slideFromRight 1s forwards;
  grid-area: Triangle;
  position: relative;
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

const BlueTriangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  right: 0;
  top: 0;
  border-bottom: 1000px solid #ecf3f4;
  border-left: 400px solid transparent;
`;
const Description = styled.div`
  grid-area: Description;
  padding: 15% 10%;

  h1 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
  }

  p {
    margin-top: 30px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    color: #5e5e5e;
    width: 500px;
    letter-spacing: 0.03em;
  }
`;

const SocialLinks = styled.div`
  width: 100%;
`;

const LinkDiv = styled.div`
  margin-right: 20px;
  display: inline-block;
  width: 130px;

  p {
    margin: 0;
    display: inline;
    font-weight: 900;
    color: black;
  }
`;

const IconImageInsta = styled.div`
  background-image: url(${insta});
  background-size: cover;
  display: inline-block;
  width: 35px;
  margin-top: 25px;
  margin-right: 10px;
  transform: translateY(12px);
  height: 35px;
`;

const IconImageMedium = styled.div`
  background-image: url(${medium});
  background-size: cover;
  display: inline-block;
  width: 30px;
  margin-left: 20px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
`;

const IconImageGithub = styled.div`
  background-image: url(${github});
  background-size: cover;
  display: inline-block;
  width: 30px;
  margin-left: 20px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
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
          <Triangle>
            <BlueTriangle />
            <JULIA>
              JU <br />
              LIA
            </JULIA>
          </Triangle>
          <BlueBackground>
            <Description>
              <h1>Web Developer & Designer</h1>
              <p>
                I’m a student at <strong>Purdue University</strong>, a digital
                minimalist, an avid book worm, a quick learner & passionate
                about technology.{" "}
                <strong>
                  Feuled by black coffee and a drive to be better than I was
                  yesterday.
                </strong>
              </p>
              <SocialLinks>
                <LinkDiv>
                  <IconImageInsta />
                  <p>37.5k</p>
                </LinkDiv>
                <LinkDiv>
                  <IconImageMedium />
                  <p>1.8k</p>
                </LinkDiv>
                <LinkDiv>
                  <IconImageGithub />
                  <p>500+</p>
                </LinkDiv>
              </SocialLinks>
            </Description>
            <Hamburger />
          </BlueBackground>
        </Content>
      </GridContainer>
    );
  };
}

export default Landing;
