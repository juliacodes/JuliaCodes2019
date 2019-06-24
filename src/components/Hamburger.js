import React, { Component } from "react";
import styled from "styled-components";
import hamburger from "./icons/hamburger.svg";

const HamburgerImg = styled.img`
  position: absolute;
  right: 100px;
  top: 100px;
`;

class Hamburger extends Component {
  render() {
    return (
      <div>
        <HamburgerImg src={hamburger} />
      </div>
    );
  }
}

export default Hamburger;
