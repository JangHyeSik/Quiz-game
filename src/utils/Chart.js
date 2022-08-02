import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { MAIN_COLOR_1, GRAY_COLOR } from '../constants/styles';

export default function Chart({ data }) {
  const { correctCount, inCorrectCount } = data;

  const expData = {
    datasets: [{
      labels: ["정답", "오답"],
      data: [correctCount, inCorrectCount],
      backgroundColor: [
        `${MAIN_COLOR_1}`,
        `${GRAY_COLOR}`,
      ],
    }],
    labels: ["정답", "오답"],
  };

  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <ChartWrapper>
      <Doughnut options={option} data={expData} />
      <ScoreText>{100 / (correctCount + inCorrectCount) * correctCount}점</ScoreText>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ScoreText = styled.div`
  position: relative;
  bottom: 62%;
  left: 40%;
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    bottom: 63%;
    left: 42%;
    font-size: 20px;
  }
`;
