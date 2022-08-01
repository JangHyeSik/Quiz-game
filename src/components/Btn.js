import React from "react";
import styled from "styled-components";
import { MAIN_COLOR_1, WHITE_COLOR } from "../constants/styles";

export default function Btn({ handleGoNext, value, children }) {
  return (
    <Button onClick={handleGoNext} value={value}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  padding: 20px 25px 20px 50px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${WHITE_COLOR};
  background-color: ${MAIN_COLOR_1};
  cursor: pointer;
  transition: 0.5s;

  :after {
    content: "➡️";
    opacity: 0;
  }

  :hover {
    padding-left: 20px;
  }

  :hover:after {
    opacity: 1;
  }
`;
