import React, { Component } from "react";
import styled from "styled-components";
import ArrowDown from "./icons/arrow.svg";

const ScrollNoticeContainer = styled.div`
  position: absolute;
  left: 140px;
  bottom: 18%;
`;
const ScrollNoticeImage = styled.img`
  position: relative;
  transform: rotate(7deg);
  animation: bounce 2s infinite forwards;

  @keyframes bounce {
    0% {
      transform: translate(0) rotate(7deg);
    }
    50% {
      transform: translate(-3px, 5px) rotate(7deg);
    }
    100% {
      transform: translate(0) rotate(7deg);
    }
  }
`;

const Text = styled.p`
  position: relative;
  margin-left: -20px;
  margin-top: -80px;
  transform: rotate(-56deg);
  font-weight: 600;
`;

class ScrollNotice extends Component {
  render() {
    return (
      <ScrollNoticeContainer>
        <ScrollNoticeImage src={ArrowDown} />
        <Text>Scroll</Text>
      </ScrollNoticeContainer>
    );
  }
}

export default ScrollNotice;
