import React from "react";
import styled from "styled-components";
import Btn from "./Btn";

export default function Home() {
  return (
    <HomeWrapper>
      <Title>Quiz Game</Title>
      <Btn>퀴즈 풀기</Btn>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #33d9b2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: #ffffff;
`;
