import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "./hamburger.svg";
import hamburgerHover from "./hamburgerHover.svg";
import close from "./close.svg";
import closeHover from "./closeHover.svg";

const HamburgerContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  height: 100%;
  z-index: 9999;
`;
const HamburgerImg = styled.div`
  z-index: 99999;
  display: block;
  position: absolute;
  top: 40px;
  right: 80px;
  width: ${props => (props.on ? `40px` : `20px`)};
  height: 30px;
  display: block;
  background-image: ${props =>
    props.on ? `url(${hamburger})` : `url(${close})`};
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 1;
  transform: translate(40px);
  transition-duration: 0.2s;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:hover {
    background-image: ${props =>
      props.on ? `url(${hamburgerHover})` : `url(${closeHover})`};
  }
`;

const NavContainer = styled.div`
  height: 100%;
  z-index: 999;
  padding-left: 80px;
  width: 500px;
  background-color: white;
  position: ${props => (props.on ? "fixed" : "absolute")};
  right: 0;
  top: 0;
  display: block;
  opacity: 0;
  animation: ${props =>
    props.on ? "SlideOutRight .7s forwards" : "SlideFromLeft .5s forwards"};

  @keyframes SlideFromLeft {
    0% {
      transform: translate(1000px);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes SlideOutRight {
    0% {
      transform: translate(0);
      opacity: 1;
    }
    100% {
      transform: translate(1000px);
      opacity: 0;
    }
  }
`;

const Links = styled.div`
  margin-top: 100px;
  width: auto;
  height: 40%;
  & > a {
    width: 200px;
    display: block;
    color: black;
    text-decoration: none;
    font-weight: 800;
    font-size: 45px;
    margin: 5% 0 0 0;
    line-height: 91.45%;
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: ${props => (props.on ? "none" : "SlideInText .7s forwards")};
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    @keyframes SlideInText {
      0% {
        transform: translate(100px);
        opacity: 0;
      }
      100% {
        transform: translate(0);
        opacity: 1;
      }
    }
    &::after {
      width: 0px;
      left: -10px;
      content: "";
      display: inline-block;
      height: 20px;
      position: absolute;
      bottom: 0px;
      z-index: -2;
      transition: width 0.4s;
    }
    &:hover::after {
      width: 150px;
      background-color: #ecf3f4;
    }
    &:nth-child(2):hover::after {
      width: 150px;
      background-color: #ffc7a2;
    }
    &:nth-child(3):hover::after {
      width: 145px;
      background-color: #b5f6ff;
    }
    &:nth-child(4):hover::after {
      width: 190px;
    }
  }
`;

const Contact = styled.div`
  font-size: 13px;
  line-height: 174.19%;
  height: 35%;
  letter-spacing: 0.03em;
  font-family: "Lato", sans-serif;
`;

const ReachOut = styled.div`
  font-size: 13px;
  line-height: 174.19%;
  height: 25%;
  letter-spacing: 0.03em;
  font-family: "Lato", sans-serif;
`;

class Hamburger extends Component {
  state = {
    active: false
  };

  constructor() {
    super();
    this.state = {
      active: true
    };
  }
  render() {
    return (
      <HamburgerContainer>
        <HamburgerImg
          on={this.state.active}
          onClick={() => this.setState({ active: !this.state.active })}
        />
        <NavContainer on={this.state.active}>
          <Links on={this.state.active}>
            <Link to="/">Home.</Link>
            <Link to="/about">About.</Link>
            <Link to="/work">Work.</Link>
            <Link to="/About">Articles.</Link>
          </Links>
          <Contact>
            Julia Johnson <br />
            Purdue University <br />
            juliajohnson@purdue.edu
          </Contact>
          <ReachOut>
            Want to work with me?
            <Link>Reach Out</Link>
          </ReachOut>
        </NavContainer>
      </HamburgerContainer>
    );
  }
}

export default Hamburger;
