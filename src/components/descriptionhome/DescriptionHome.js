import React, { Component } from "react";
import styled from "styled-components/macro";
import insta from "./insta.png";
import medium from "./medium.png";
import github from "./github.png";

const Description = styled.div`
  padding: 0;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-position: center center;

  h1 {
    width: 100%;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
  }

  p {
    margin: 30px 0;
    width: 100%;
    max-width: 500px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    color: #5e5e5e;
    letter-spacing: 0.03em;
  }
`;

const SocialLinks = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  align-content: space-around;
`;

const LinkDiv = styled.div`
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
  width: 30px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
`;

const IconImageMedium = styled.div`
  background-image: url(${medium});
  background-size: cover;
  display: inline-block;
  width: 30px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
`;

const IconImageGithub = styled.div`
  background-image: url(${github});
  background-size: cover;
  display: inline-block;
  width: 30px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
`;
class DescriptionHome extends Component {
  render() {
    return (
      <Description>
        <h1>Web Developer & Designer</h1>
        <p>
          I’m a student at <strong>Purdue University</strong>, a digital
          minimalist, an avid book worm, a quick learner & passionate about
          technology.{" "}
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
    );
  }
}

export default DescriptionHome;
