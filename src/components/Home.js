import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Btn from "./Btn";

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <Title>Quiz Game</Title>
      <Btn handleGoNext={() => navigate("/quiz")}>퀴즈 풀기</Btn>
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
