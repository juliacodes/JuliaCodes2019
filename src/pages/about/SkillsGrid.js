import React from "react";
import styled from "styled-components/macro";

const DarkGrid = styled.div`
  width: 100%;
  display: flex;
  background-color: #1c202e;
`;

const LeftSkills = styled.div`
  flex: 40%;
  padding: 40px;
`;
const RightSkills = styled.div`
  flex: 30%;
  padding: 40px;
`;

const SkillDescription = styled.div`
  width: 100%;
  color: white;
  padding: 30px 20%;

  h3 {
    max-width: 250px;
    margin: 30px 0;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }

  p {
    color: #dcdcdc;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 156.19%;
    margin-bottom: 10px;
    letter-spacing: 0.03em;
  }
`;
function SkillsGrid() {
  return (
    <DarkGrid>
      <LeftSkills>
        <SkillDescription>
          <h3>My Skills.</h3>
          <p>
            I also make a mean grilled cheese sandwich, but I doubt that’s what
            you’re here to figure out.
          </p>
        </SkillDescription>
      </LeftSkills>
      <RightSkills>
        <SkillDescription>
          <h3>Web Development</h3>
          <p> Advanced HTML & CSS </p>
          <p> Javascript </p>
          <p>React </p>
          <p>React Native</p>
          <p> PHP & SQL</p>
        </SkillDescription>
      </RightSkills>
      <RightSkills>
        <SkillDescription>
          <h3>Design</h3>
          <p>Ilustrator</p>
          <p> Photoshop </p>
          <p>Figma</p>
          <p> Adobe XD </p>
          <p> Maya 3D</p>
        </SkillDescription>
      </RightSkills>
    </DarkGrid>
  );
}

export default SkillsGrid;
