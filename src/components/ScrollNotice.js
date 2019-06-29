import React, { Component } from "react";
import styled from "styled-components";
import ArrowDown from "./icons/arrow.svg";

const ScrollNoticeContainer = styled.div`
  grid-area: SCROLL;
  position: relative;
  margin-bottom: 20px;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
  opacity: 0;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const ScrollNoticeImage = styled.img`
  position: absolute;
  bottom: 0;
  right: -20px;
  transform: rotate(1.75deg);
  animation: bounce 2s infinite forwards;

  @keyframes bounce {
    0% {
      transform: translate(0) rotate(1.5deg);
    }
    50% {
      transform: translate(-3px, 5px) rotate(1.75deg);
    }
    100% {
      transform: translate(0) rotate(1.75deg);
    }
  }
`;

const Text = styled.p`
  position: absolute;
  bottom: 40px;
  right: 0px;
  transform: rotate(-63deg);
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
