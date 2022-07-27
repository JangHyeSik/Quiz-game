import React from "react";
import styled from "styled-components";

export default function Btn({ children }) {
  return (
    <Button>
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
  background-color: transparent;
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
