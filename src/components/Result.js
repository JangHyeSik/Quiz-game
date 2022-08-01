import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Chart from "./Chart";
import { makeTimeText } from "../utils/utils";

export default function Result() {
  const result = useSelector((state) => state.result);
  const { time, correctCount, inCorrectCount } = result;

  return (
    <ResultWrapper>
      <h2 className="result-comment">수고하셨습니다 😊</h2>
      <ResultContainer>
        <ResultTextContainer>
          <ResultText>소요 시간: {makeTimeText(time)}초</ResultText>
          <ResultText>총 개수: {correctCount + inCorrectCount}개</ResultText>
          <ResultText>정답 개수: {correctCount}개</ResultText>
          <ResultText>오답 개수: {inCorrectCount}개</ResultText>
        </ResultTextContainer>
        <Chart data={result}/>
      </ResultContainer>
    </ResultWrapper>
  );
}

const ResultWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .result-comment {
    margin-top: 25px;
    font-size: 30px;
  }
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ResultTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ResultText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
