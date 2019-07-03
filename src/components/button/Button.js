import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const ButtonCont = styled.div`
  max-width: 250px;
`;

const ButtonDiv = styled.p`
  font-family: "Lato", sans-serif;
  max-width: 90px;
  font-weight: 400;
  font-size: 15px;
  line-height: 156.19%;
  padding: 7px;
  color: #5e5e5e;
  letter-spacing: 0.03em;
  border-bottom: 1px solid #5e5e5e;
  text-align: center;
  transition: all 1s;

  &:hover {
    border: none;
    border-bottom: 1px solid white;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

function Button(props) {
  return (
    <ButtonCont>
      <Link to={props.link}>
        <ButtonDiv>{props.buttonText}</ButtonDiv>
      </Link>
    </ButtonCont>
  );
}

export default Button;
