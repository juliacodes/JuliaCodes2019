import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "./hamburger.svg";
import hamburgerHover from "./hamburgerHover.svg";
import close from "./close.svg";
import closeHover from "./closeHover.svg";

const HamburgerContainer = styled.div`
  grid-area: Ham;
  position: relative;
`;
export const HamburgerImg = styled.div`
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
  opacity: 0;
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
  height: 100vh;
  width: 500px;
  background-color: white;
  position: ${props => (props.on ? "fixed" : "absolute")};
  display: block;
  opacity: 0;
  transition: 0.3s;
  animation: ${props =>
    props.on ? "SlideOutRight .7s forwards" : "SlideFromLeft .5s forwards"};
  right: 0;
  top: 0;

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
  & > a {
    width: 200px;
    display: block;
    color: black;
    text-decoration: none;
    font-weight: 800;
    font-size: 45px;
    margin: 31px 0 0 81px;
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
      background-color: #ffc7a2;
      transition: width 0.4s;
    }
    &:hover::after {
      width: 160px;
    }
    &:nth-child(2):hover::after {
      width: 170px;
    }
    &:nth-child(3):hover::after {
      width: 155px;
    }
    &:nth-child(4):hover::after {
      width: 205px;
    }
  }
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
            <Link to="/About">About.</Link>
            <Link to="/About">Work.</Link>
            <Link to="/About">Articles.</Link>
          </Links>
        </NavContainer>
      </HamburgerContainer>
    );
  }
}

export default Hamburger;
