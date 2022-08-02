import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Chart from "../../utils/Chart";
import { makeTimeText } from "../../utils/utils";

export default function Result() {
  const result = useSelector((state) => state.result);
  const { time, correctCount, inCorrectCount } = result;

  return (
    <ResultWrapper>
      <h2 className="result-comment">수고하셨습니다 😊</h2>
      <ResultContainer>
        <ResultTextContainer>
          <div className="time">소요 시간: {makeTimeText(time)}초</div>
          <div className="total">총 개수: {correctCount + inCorrectCount}개</div>
          <div className="correct-score">정답 개수: {correctCount}개</div>
          <div className="incorrect-score">오답 개수: {inCorrectCount}개</div>
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

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const ResultTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    height: 100px;
    font-size: 16px;
  }

  .total, .correct-score, .incorrect-score {
    @media (max-width: 768px) {
      display: none;
    }
  }

`;

const ResultText = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
