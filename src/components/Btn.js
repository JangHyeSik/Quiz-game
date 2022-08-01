import React from "react";
import styled from "styled-components";

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
  color: #ffffff;
  background-color: #33d9b2;
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
